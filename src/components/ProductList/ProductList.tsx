import React, { FC } from "react";
import styles from "./ProductList.module.css";
import { IProductsParams } from "@/models/productsParams.inteface";
import { Product } from "@/models/product.interface";
import ProductCard from "../ProductCard/ProductCard";

interface ProductListProps {
    loading: boolean;
    products: Product[];
}

const ProductList:FC<ProductListProps> = ({loading, products}) => {


    return (
        <div className={styles.productsList}>
            {loading ? (
                <p>Loading...</p>
            ) : products.length > 0 ? (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
};

export default ProductList;
