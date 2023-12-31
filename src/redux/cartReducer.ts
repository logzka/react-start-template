import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TCake } from 'src/api/cakes';

type TId = TCake['id'];

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action: PayloadAction<TCake>) => [...state, action.payload],
    deleteItem: (state, action: PayloadAction<TId>) => state.filter(({ id }) => id !== action.payload),
  },
});

export const { addItem: cartAddItem, deleteItem: cartDeleteItem } = cartSlice.actions;

export default cartSlice.reducer;
