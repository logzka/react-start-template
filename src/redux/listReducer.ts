import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'list',
  initialState: {
    cakes: [],
    pageSize: 3,
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
    setCakes(state, action) {
      return {
        ...state,
        cakes: action.payload,
      };
    },
  },
});

export const { setPagination, setCakes } = listSlice.actions;
export default listSlice.reducer;
