import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TCake, cakes as cakesData } from 'src/api/cakes';
import { RootState } from 'src/store';

type TId = TCake['id'];
type TCartElement = TCake & { count: number };

// const initialState = cakesData.map((cake) => ({ ...cake, count: 1 }));

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action: PayloadAction<TCartElement>) => [
      ...state.filter(({ id }) => id !== action.payload.id),
      action.payload,
    ],
    deleteItem: (state, action: PayloadAction<TId>) => state.filter(({ id }) => id !== action.payload),
  },
});

export const cartSelectors = {
  get: (state: RootState): RootState['cart'] => state.cart,
};

export const { addItem: cartAddItem, deleteItem: cartDeleteItem } = cartSlice.actions;

export default cartSlice.reducer;
