import { createSlice } from '@reduxjs/toolkit';

export const initializeSlice = createSlice({
  name: 'initialized',
  initialState: null,
  reducers: {
    init: () => true,
  },
});

export const initializedActions = initializeSlice.actions;
export const { reducer: initialized } = initializeSlice;
