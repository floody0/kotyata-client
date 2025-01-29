export interface IProductsParams {
    categories: number[];
    minPrice: number;
    maxPrice: number;
    sort: string;
    searchQuery: string;
    page: number;
    limit: number;
}
