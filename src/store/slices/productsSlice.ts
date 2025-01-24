import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/models/product.interface";

interface ProductsState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null,
};

export const fetchProducts = createAsyncThunk<
    Product[],
    {
        categories: number[];
        minPrice: number;
        maxPrice: number;
        sort: string;
        searchQuery: string;
        page: number;
        limit: number;
    },
    { rejectValue: string }
>(
    "products/fetchProducts",
    async (params, { rejectWithValue }) => {
        try {
            const queryParams = new URLSearchParams({
                categories: JSON.stringify(params.categories),
                minPrice: String(params.minPrice),
                maxPrice: String(params.maxPrice),
                sort: params.sort,
                searchQuery: params.searchQuery,
                page: String(params.page),
                limit: String(params.limit),
            }).toString();

            const response = await fetch(`http://localhost:5000/products?${queryParams}`, {
                method: "GET",
                cache: "no-store",
            });

            if (!response.ok) {
                throw new Error("Ошибка загрузки продуктов");
            }

            const data = await response.json();
            return data.items as Product[];
        } catch (error) {
            return rejectWithValue("Не удалось загрузить продукты");
        }
    }
);


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Не удалось загрузить продукты";
            });
    },
});

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;
