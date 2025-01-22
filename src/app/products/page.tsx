import { Container } from "@/components";
import React from "react";
import styles from "./Products.module.css";
import Image from "next/image";

type Props = {};

const Products = (props: Props) => {
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
            <Container className={styles.productsPageContainer}>dd</Container>
        </div>
    );
};

export default Products;
