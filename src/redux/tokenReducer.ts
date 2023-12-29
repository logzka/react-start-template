import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store';

const tokenSlice = createSlice({
  name: 'token',
  initialState: '',
  reducers: {
    set: (state, action: PayloadAction<string>) => action.payload,
    reset: () => '',
  },
});

export const { set: tokenSet, reset: tokenReset } = tokenSlice.actions;
export const tokenSelectors = {
  get: (state: RootState): RootState['token'] => state.token,
};
export default tokenSlice.reducer;
