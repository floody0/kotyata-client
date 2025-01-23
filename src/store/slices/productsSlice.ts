import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// Типы
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

interface ProductsState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

// Начальное состояние
const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null,
};

// Асинхронный thunk для загрузки продуктов
export const fetchProducts = createAsyncThunk<
    Product[], // Возвращаемый тип
    { [key: string]: any }, // Тип принимаемых параметров
    { rejectValue: string } // Тип ошибки
>("products/fetchProducts", async (params, { rejectWithValue }) => {
    try {
        // Создаем строку параметров для запроса
        const queryParams = new URLSearchParams({
            categories: JSON.stringify(params.categories),
            minPrice: String(params.minPrice),
            maxPrice: String(params.maxPrice),
            sort: params.sort,
            searchQuery: params.searchQuery,
            page: String(params.page),
            limit: String(params.limit),
        }).toString();

        // Выполняем fetch-запрос
        const response = await fetch(`http://localhost:5000/products?${queryParams}`, {
            method: "GET",
            cache: "no-store", // Для отключения кеширования
        });
        console.log(response);

        if (!response.ok) {
            throw new Error("Ошибка загрузки продуктов");
        }

        const data = await response.json();
        return data.items as Product[];
    } catch (error) {
        return rejectWithValue("Не удалось загрузить продукты");
    }
});

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
                state.error = action.payload as string;
            });
    },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
