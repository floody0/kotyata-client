import Link from "next/link";
import React, { FC } from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import { Product } from "@/models/product.interface";

interface ProductProps {
    product: Product
};

const ProductCard:FC<ProductProps> = ({product}) => {
    return (
        <Link
            href={`/products/${product.id}`}
            className={styles.productsItem}
            key={product.id}
        >
            <span className={styles.onSale}>-30%</span>
            <Image
                src={product.photos?.[0] || "/assets/product-img.png"}
                alt={product.title}
                width={300}
                height={300}
                className={styles.productImg}
            />
            <h4 className={styles.productTitle}>{product.title}</h4>
            <div className={styles.productPrice}>
                {product.sellPrice > 0 ? (
                    <>
                        <span className={`${styles.price}`}>
                            {product.sellPrice +'₴'}
                        </span>
                        <span className={`${styles.oldPrice}`}>
                            {product.normalPrice +'₴'}
                        </span>
                    </>
                ) : (
                    <span className={styles.price}>{product.normalPrice +'₴'}</span>
                )}
            </div>
        </Link>
    );
};

export default ProductCard;
