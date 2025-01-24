export interface Product {
    id: number;
    title: string;
    description: string;
    normalPrice: number;
    sellPrice: number;
    isInStock: boolean;
    note: string;
    categories: string[];
    photos: string[];
}