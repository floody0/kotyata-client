'use client';
import { Container, ProductCard } from "@/components";
import React, { useState } from "react";
import styles from "./Products.module.css";
import { fetchProducts } from "@/store/slices/productsSlice";
import { Product } from "@/models/product.interface";
import { store } from "@/store/store";
import MySearch from "@/UI/MySearch/MySearch";
import { MySelect } from "@/UI";

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

    const [searchQuerry, setSearchQuerry] = useState<string>();

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
                            <MySearch className={styles.searchTool} setSearchQuerry={setSearchQuerry}/>
                            <div className={styles.sortTool}>
                                Сортувати:
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
