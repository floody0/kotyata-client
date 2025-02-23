import Link from "next/link";
import React, { FC } from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import { Product } from "@/models/product.interface";
import { MyButton } from "@/UI";

interface ProductProps {
    product: Product;
    view?: string;
}

const ProductCard: FC<ProductProps> = ({ product, view }) => {
    return (
        <Link
            href={`/products/${product.id}`}
            className={`${styles.productsItem} ${
                view == "list" ? styles.listView : ""
            }`}
            key={product.id}
        >
            <span className={styles.onSale}>-30%</span>
            <Image
                src={product.photos?.[0] || "/assets/product-img.png"}
                alt={product.title}
                width={300}
                height={300}
                className={`${styles.productImg} ${
                    view == "list" ? styles.listImg : ""
                }`}
            />
            {view == "list" ? (
                <div className={styles.productInfo}>
                    <h4 className={styles.productTitle}>{product.title}</h4>
                    <div className={styles.productPrice}>
                        {product.sellPrice > 0 ? (
                            <>
                                <span className={`${styles.price}`}>
                                    {product.sellPrice + "₴"}
                                </span>
                                <span className={`${styles.oldPrice}`}>
                                    {product.normalPrice + "₴"}
                                </span>
                            </>
                        ) : (
                            <span className={styles.price}>
                                {product.normalPrice + "₴"}
                            </span>
                        )}
                    </div>
                    <p className={styles.productDescription}>
                        {product.description}
                    </p>
                    <div className={styles.productButtons}>
                        <MyButton className={styles.productButton}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="currentColor"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path>
                            </svg>
                        </MyButton>
                        <MyButton className={styles.productButton}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="currentColor"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                            </svg>
                        </MyButton>
                        <MyButton className={styles.productButton}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="currentColor"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748ZM10 10V7H12V10H15V12H12V15H10V12H7V10H10Z"></path>
                            </svg>
                        </MyButton>
                    </div>
                </div>
            ) : (
                <div className={styles.productInfo}>
                    <h4 className={styles.productTitle}>{product.title}</h4>
                    <div className={styles.productPrice}>
                        {product.sellPrice > 0 ? (
                            <>
                                <span className={`${styles.price}`}>
                                    {product.sellPrice + "₴"}
                                </span>
                                <span className={`${styles.oldPrice}`}>
                                    {product.normalPrice + "₴"}
                                </span>
                            </>
                        ) : (
                            <span className={styles.price}>
                                {product.normalPrice + "₴"}
                            </span>
                        )}
                    </div>
                </div>
            )}
        </Link>
    );
};

export default ProductCard;
