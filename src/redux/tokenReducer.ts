import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'src/store';

const tokenSlice = createSlice({
  name: 'token',
  initialState: localStorage.getItem('token'),
  reducers: {
    set: (state, action: PayloadAction<string>) => action.payload,
    reset: () => '',
  },
});

const tokenActions = tokenSlice.actions;

const resetTokenThunk = (): AppThunk => (dispatch, getState) => {
  dispatch(tokenActions.reset());
  const state = getState();
  localStorage.setItem('token', state.token);
};

const setTokenThunk =
  (token: string): AppThunk =>
  (dispatch, getState) => {
    dispatch(tokenActions.set(token));
    const state = getState();
    localStorage.setItem('token', state.token);
  };

export const tokenThunks = {
  resetTokenThunk: resetTokenThunk,
  setTokenThunk: setTokenThunk,
};

export const tokenSelectors = {
  get: (state: RootState): RootState['token'] => state.token,
};

export default tokenSlice.reducer;
