// store/productsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/models/product.interface';

interface FetchProductsParams {
  categories: number[];
  minPrice: number;
  maxPrice: number;
  sort: string;
  searchQuery: string;
  page: number;
  limit: number;
}

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

export const fetchProducts = createAsyncThunk<Product[], FetchProductsParams, { rejectValue: string }>(
  'products/fetchProducts',
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
        method: 'GET',
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error('Ошибка загрузки продуктов');
      }

      const data = await response.json();
      return data.items as Product[];
    } catch (error) {
      return rejectWithValue('Не удалось загрузить продукты');
    }
  }
);

export const selectFilteredProducts = (
    state: { products: ProductsState },
    { searchQuery, sortQuery }: { searchQuery: string; sortQuery: string }
  ): Product[] => {
    const filtered = state.products.products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    if (sortQuery === '1') {
      return [...filtered].sort((a, b) => a.sellPrice - b.sellPrice);
    } else if (sortQuery === '2') {
      return [...filtered].sort((a, b) => b.sellPrice - a.sellPrice);
    }
  
    return filtered;
  };

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    sortProducts: (
      state,
      action: PayloadAction<{ key: keyof Product; order: 'asc' | 'desc' }>
    ) => {
      const { key, order } = action.payload;
      state.products.sort((a, b) =>
        order === 'asc' ? (a[key] > b[key] ? 1 : -1) : (a[key] < b[key] ? 1 : -1)
      );
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
        state.error = action.payload || 'Не удалось загрузить продукты';
      });
  },
});

export const { setProducts, sortProducts } = productsSlice.actions;
export default productsSlice.reducer;
