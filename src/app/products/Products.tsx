"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components";
import { Product, Category } from "@/models";
import styles from "./Products.module.css";
import { fetchProducts, setProducts } from "@/store/slices/productsSlice";
import {MySearch, MySelect} from "@/UI";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { productsSortOptions } from "@/constants/sortParams";
import { handleFilters } from "../../helpers/handleFilters";
import ProductList from "@/components/ProductList/ProductList";
import PriceFilter from "@/components/PriceFilter/PriceFilter";
import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";

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
    const [sortQuery, setSortQuery] = useState<string>(serverParams.sort || "");
    const [minPrice, setMinPrice] = useState<number>(
        initialProductsResponse.minPrice || Number(serverParams.minPrice)
    );
    const [maxPrice, setMaxPrice] = useState<number>(
        initialProductsResponse.maxPrice || Number(serverParams.maxPrice)
    );

    const handleSearch = () => {
        if (hydrated) {
            handleFilters({
                keyword: searchQuery,
                sort: sortQuery,
            });

            dispatch(
                fetchProducts({
                    categories: [],
                    minPrice: minPrice,
                    maxPrice: maxPrice,
                    sort: sortQuery,
                    searchQuery: searchQuery,
                    page: 1,
                    limit: 6,
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
    }, [searchQuery, sortQuery]);

    // TODO:
    // Не правильно приходит ответ, сравнивает цену по normalPrice а не по sellPrice
    // Не коректно работает onPointerUp в MyRangebar

    // Добавил обрабочик на Enter в Input
    // PriceFilter Done!

    console.log(categories)

    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

    const handleCategoryChange = (selectedIds: number[]) => {
        setSelectedCategories(selectedIds);
        console.log("Selected categories:", selectedIds);
    };

    console.log(selectedCategories)

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
                        <CategoryFilter categories={categories} onChange={handleCategoryChange}/>
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
                            <div className={styles.sortTool}>
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
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}
