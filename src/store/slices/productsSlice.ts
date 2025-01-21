import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: number;
    title: string;
    description: string;
    normalPrice: number;
    sellPrice: number;
    isInStock: boolean;
    note: string;
    categories: [];
    photos: [];
}

type ProductsState = Product[];

const initialState: ProductsState = [];

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.push(action.payload);
        },
    },
});
export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
