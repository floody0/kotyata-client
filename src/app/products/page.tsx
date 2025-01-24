"use client";
import { Container } from "@/components";
import React, { useState } from "react";
import styles from "./Products.module.css";
import { MySelect, MySearch } from "@/UI";
import { IProductsOption } from "@/models/productsOption.inteface";

type Props = {};

/* async function fetchProductsOnServer(params: {
    categories: number[];
    minPrice: number;
    maxPrice: number;
    sort: string;
    searchQuery: string;
    page: number;
    limit: number;
}): Promise<Product[]> {
    await store.dispatch(fetchProducts(params) as any);
    console.log(store.getState().products.products)
    return store.getState().products.products;
} */

const Products = (props: Props) => {
    /* const params = {
        categories: [1],
        minPrice: 0,
        maxPrice: 100,
        sort: "asc",
        searchQuery: "",
        page: 1,
        limit: 10,
    };

    const products = await fetchProductsOnServer(params); */

    const options: IProductsOption[] = [
        {
            value: "1",
            label: "Від дешевих до дорогих",
        },
        {
            value: "2",
            label: "Від дорогих до дешевих",
        },
        {
            value: "3",
            label: "Новинки",
        },
    ];

    const [searchQuerry, setSearchQuerry] = useState<string>("");
    const [sortQuerry, setSortQuerry] = useState<string>("3");

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
                    <div className={styles.sidebar}>hhh</div>
                    <div className={styles.mainSection}>
                        <div className={styles.sectionTools}>
                            <MySearch
                                className={styles.searchTool}
                                setSearchQuerry={setSearchQuerry}
                            />
                            <div className={styles.sortTool}>
                                Сортувати:
                                <MySelect
                                    options={options}
                                    sortQuerry={sortQuerry}
                                    setSortQuerry={setSortQuerry}
                                />
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.productsList}>
                        {products.map((products) => (
                            <ProductCard key={products.id} {...products} />
                        ))}
                    </div> */}
                </div>
            </Container>
        </div>
    );
};

export default Products;
