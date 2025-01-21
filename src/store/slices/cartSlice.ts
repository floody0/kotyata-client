import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
};

type CartState = {
    items: CartItem[];
    totalQuantity: number;
    totalPrice: number;
};

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
            state.totalQuantity += action.payload.quantity;
            state.totalPrice += action.payload.price * action.payload.quantity;
        }
    },
});
export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
