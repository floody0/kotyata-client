import Link from "next/link";
import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";

interface ProductProps {
    id: number;
    title: string;
    description: string;
    normalPrice: number;
    sellPrice: number;
    isInStock: boolean;
    note: string;
    categories: string[];
    photos: string[];
};

const ProductCard = ({id, title, normalPrice, sellPrice, isInStock, note, categories, photos}: ProductProps) => {
    return (
        <Link
            href={`/products/${id}`}
            className={styles.productsItem}
            key={id}
        >
            <span className={styles.onSale}>-30%</span>
            <Image
                src={photos[0]}
                alt={title}
                width={300}
                height={300}
                className={styles.productImg}
            />
            <h4 className={styles.productTitle}>{title}</h4>
            <div className={styles.productPrice}>
                {sellPrice > 0 ? (
                    <>
                        <span className={`${styles.price}`}>
                            {sellPrice +'₴'}
                        </span>
                        <span className={`${styles.oldPrice}`}>
                            {normalPrice +'₴'}
                        </span>
                    </>
                ) : (
                    <span className={styles.price}>{normalPrice +'₴'}</span>
                )}
            </div>
        </Link>
    );
};

export default ProductCard;
