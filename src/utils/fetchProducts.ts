import { Product } from "@/models";
import { fetchData } from "../api/fetchData";

export interface FetchProductsParams {
    searchQuery?: string;
    sort?: string;
    minPrice?: string;
    maxPrice?: string;
    page?: string;
    limit?: string;
    categories?: number[];
}

export async function fetchProducts(params: FetchProductsParams) {
    return fetchData<{
        items: Product[];
        maxPrice: number;
        minPrice: number;
        currentPage: number;
        totalItems: number;
        totalPages: number;
    }>("/products", params);
}
