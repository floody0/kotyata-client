import React, { FC } from "react";
import styles from "./ProductList.module.css";
import { IProductsParams } from "@/models/productsParams.inteface";
import { Product } from "@/models/product.interface";
import ProductCard from "../ProductCard/ProductCard";

interface ProductListProps {
    loading: boolean;
    products: Product[];
    view? :string;
}

const ProductList:FC<ProductListProps> = ({loading, products, view}) => {

    return (
        <div className={`${styles.productsList} ${(view == 'block' ? styles.block : styles.list)}`}>
            {loading ? (
                <p>Loading...</p>
            ) : products.length > 0 ? (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} view={view}/>
                ))
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
};

export default ProductList;
