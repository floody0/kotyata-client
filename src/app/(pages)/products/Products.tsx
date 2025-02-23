"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components";
import { Product, Category } from "@/models";
import styles from "./Products.module.css";
import { fetchProducts, setProducts } from "@/store/slices/productsSlice";
import { MyButton, MySearch, MySelect } from "@/UI";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { productsSortOptions } from "@/constants/sortParams";
import { handleFilters } from "../../../helpers/handleFilters";
import ProductList from "@/components/ProductList/ProductList";
import PriceFilter from "@/components/PriceFilter/PriceFilter";
import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";
import PagePagination from "@/components/PagePagination/PagePagination";

interface ServerParams {
    categories?: string;
    minPrice?: string;
    maxPrice?: string;
    sort?: string;
    searchQuery?: string;
    page?: string;
    limit?: string;
}
interface InitialResponse {
    items: Product[];
    maxPrice: number;
    minPrice: number;
    currentPage: number;
    totalItems: number;
    totalPages: number;
}

interface ClientProductsPageProps {
    initialProductsResponse: InitialResponse;
    categories: Category[];
    serverParams: ServerParams;
}

export default function ClientProductsPage({
    initialProductsResponse,
    categories,
    serverParams,
}: ClientProductsPageProps) {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.products);
    const loading = useAppSelector((state) => state.products.loading);

    const [hydrated, setHydrated] = useState(false);
    const displayedProducts = hydrated
        ? products
        : initialProductsResponse.items;

    const [searchQuery, setSearchQuery] = useState<string>(
        serverParams.searchQuery || ""
    );
    const [viewMode, setViewMode] = useState<string>("block");
    const [sortQuery, setSortQuery] = useState<string>(serverParams.sort || "");
    const [minPrice, setMinPrice] = useState<number>(
        initialProductsResponse.minPrice || Number(serverParams.minPrice)
    );
    const [maxPrice, setMaxPrice] = useState<number>(
        initialProductsResponse.maxPrice || Number(serverParams.maxPrice)
    );
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(viewMode === "block" ? 6 : 3);
    const handleSearch = () => {
        if (hydrated) {
            handleFilters({
                keyword: searchQuery,
                sort: sortQuery,
                minPrice: String(minPrice),
                maxPrice: String(maxPrice),
                page: String(page),
            });

            dispatch(
                fetchProducts({
                    categories: selectedCategories,
                    minPrice: minPrice,
                    maxPrice: maxPrice,
                    sort: sortQuery,
                    searchQuery: searchQuery,
                    page: page,
                    limit: limit,
                })
            );
        }
    };

    useEffect(() => {
        if (initialProductsResponse.items.length > 0) {
            dispatch(setProducts(initialProductsResponse.items));
        }
        setHydrated(true);
        setSearchQuery(serverParams.searchQuery || "");
    }, [initialProductsResponse.items]);

    useEffect(() => {
        handleSearch();
        console.log(displayedProducts);
        console.log(viewMode);
    }, [searchQuery, sortQuery, selectedCategories, page, viewMode]);

    // TODO:
    // Не правильно приходит ответ, сравнивает цену по normalPrice а не по sellPrice
    // Не коректно работает onPointerUp в MyRangebar
    // Переделать слайс products для totalPages в пагинации и maxPrice и minPrice

    return (
        <div className={styles.productsPage}>
            <div className={styles.poster}>
                <Container className={styles.productsPageContainer}>
                    <h2 className={styles.posterTitle}>
                        Все для Ваших Мурчиків
                    </h2>
                    <p className={styles.posterDiscription}>
                        Відкрийте чудовий каталог з кормами та аксесуарами для
                        вашого малюка.
                    </p>
                </Container>
            </div>
            <Container className={styles.productsPageContainer}>
                <div className={styles.productsSection}>
                    <div className={styles.sidebar}>
                        <CategoryFilter
                            categories={categories}
                            onChange={setSelectedCategories}
                        />
                        <PriceFilter
                            minPrice={minPrice}
                            maxPrice={maxPrice}
                            setMinPrice={setMinPrice}
                            setMaxPrice={setMaxPrice}
                            handleSearch={handleSearch}
                            minLimit={initialProductsResponse.minPrice}
                            maxLimit={initialProductsResponse.maxPrice}
                        />
                    </div>
                    <div className={styles.mainSection}>
                        <div className={styles.sectionTools}>
                            <MySearch
                                className={styles.searchTool}
                                setSearchQuerry={setSearchQuery}
                                value={searchQuery}
                                onClick={handleSearch}
                            />
                            <div
                                className={`${styles.tool} ${styles.viewTool}`}
                            >
                                Вигляд:
                                <MyButton
                                    className={`${styles.viewButton} ${
                                        viewMode === "block"
                                            ? styles.active
                                            : ""
                                    }`}
                                    onClick={() => {
                                        setViewMode("block");
                                        setLimit(6);
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill="none"
                                            d="M0 0h24v24H0z"
                                        ></path>
                                        <path d="M22 12.999V20C22 20.5523 21.5523 21 21 21H13V12.999H22ZM11 12.999V21H3C2.44772 21 2 20.5523 2 20V12.999H11ZM11 3V10.999H2V4C2 3.44772 2.44772 3 3 3H11ZM21 3C21.5523 3 22 3.44772 22 4V10.999H13V3H21Z"></path>
                                    </svg>
                                </MyButton>
                                <MyButton
                                    className={`${styles.viewButton} ${
                                        viewMode === "list" ? styles.active : ""
                                    }`}
                                    onClick={() => {
                                        setViewMode("list");
                                        setLimit(3);
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill="none"
                                            d="M0 0h24v24H0z"
                                        ></path>
                                        <path d="M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path>
                                    </svg>
                                </MyButton>
                            </div>
                            <div className={`${styles.tool}`}>
                                Сортувати:
                                <MySelect
                                    options={productsSortOptions}
                                    sortQuery={sortQuery}
                                    setSortQuery={setSortQuery}
                                />
                            </div>
                        </div>
                        <ProductList
                            loading={loading}
                            products={displayedProducts}
                            view={viewMode}
                        />
                        <PagePagination
                            totalPages={initialProductsResponse.totalPages}
                            currentPage={page}
                            onPageChange={setPage}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}
