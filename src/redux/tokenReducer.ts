import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: '',
  reducers: {
    set: (state, action: PayloadAction<string>) => {
      state = action.payload;
    },
    reset: () => '',
  },
});

export const { set: tokenSet, reset: tokenReset } = tokenSlice.actions;
export default tokenSlice.reducer;
