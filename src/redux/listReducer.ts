import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

/** Api */
import { cakes } from '../api/cakes';

const listSlice = createSlice({
  name: 'list',
  initialState: {
    cakes: [],
    pageSize: 10,
    pageNumber: 1,
  },
  reducers: {
    setPagination(state, action) {
      console.log('payload pagination', action.payload);
      return {
        ...state,
        pageNumber: action.payload.pageNumber,
        pageSize: action.payload.pageSize,
      };
    },
    getCakes(state) {
      return {
        ...state,
        cakes: cakes,
      };
    },
    loadMoreCakes(state) {
      return {
        ...state,
        cakes: [
          ...state.cakes,
          {
            ...state.cakes[Math.floor(Math.random() * state.cakes.length)],
            id: uuidv4(),
            count: 0,
          },
          {
            ...state.cakes[Math.floor(Math.random() * state.cakes.length)],
            id: uuidv4(),
            count: 0,
          },
          {
            ...state.cakes[Math.floor(Math.random() * state.cakes.length)],
            id: uuidv4(),
            count: 0,
          },
        ],
      };
    },
  },
});

export const { setPagination, getCakes, loadMoreCakes } = listSlice.actions;
export default listSlice.reducer;
