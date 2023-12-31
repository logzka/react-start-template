import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TCake, cakes as cakesData } from 'src/api/cakes';
import { RootState } from 'src/store';

type TId = TCake['id'];

const cartSlice = createSlice({
  name: 'cart',
  initialState: cakesData,
  reducers: {
    addItem: (state, action: PayloadAction<TCake>) => [...state, action.payload],
    deleteItem: (state, action: PayloadAction<TId>) => state.filter(({ id }) => id !== action.payload),
  },
});

export const cartSelectors = {
  get: (state: RootState): RootState['cart'] => state.cart,
};

export const { addItem: cartAddItem, deleteItem: cartDeleteItem } = cartSlice.actions;

export default cartSlice.reducer;
