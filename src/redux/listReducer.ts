import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/store';
import { v4 as uuidv4 } from 'uuid';

/** Api */
import { cakes } from '../api/cakes';

const listSlice = createSlice({
  name: 'list',
  initialState: [],
  reducers: {
    getCakes() {
      return cakes;
    },
    loadMoreCakes(state) {
      return [
        ...state,
        {
          ...state[Math.floor(Math.random() * state.length)],
          id: uuidv4(),
          count: 0,
        },
        {
          ...state[Math.floor(Math.random() * state.length)],
          id: uuidv4(),
          count: 0,
        },
        {
          ...state[Math.floor(Math.random() * state.length)],
          id: uuidv4(),
          count: 0,
        },
      ];
    },
  },
});

export const listSelectors = {
  get: (state: RootState): RootState['list'] => state.list,
};

export const { getCakes, loadMoreCakes } = listSlice.actions;
export default listSlice.reducer;
