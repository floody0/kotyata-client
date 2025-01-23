'use client';
import { Container, ProductCard } from "@/components";
import React, { useEffect } from "react";
import styles from "./Products.module.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts, Product } from "@/store/slices/productsSlice";

type Props = {};

/* async function fetchProductsOnServer() {
    await store.dispatch(fetchProducts());
    return store.getState().products.products; // Возвращаем продукты
}
 */
const Products = () => {

    const dispatch = useAppDispatch();
    const { products, loading, error } = useAppSelector(
        (state) => state.products
    );

    useEffect(() => {
        dispatch(
            fetchProducts({
                categories: [1],
                minPrice: 0,
                maxPrice: 10000,
                sort: "asc",
                searchQuery: "",
                page: 1,
                limit: 10,
            })
        );
    }, [dispatch]);

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
                <div className={styles.productsList}>
                    {products.map((products) => (
                        <ProductCard key={products.id} {...products} />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Products;
