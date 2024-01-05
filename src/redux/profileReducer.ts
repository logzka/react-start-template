import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/store';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    firstName: '',
    lastName: '',
    gender: 'female',
    age: 0,
    phone: '',
    email: '',
    role: '',
  },
  reducers: {
    profileAdd(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    profileReset() {
      return {
        firstName: '',
        lastName: '',
        gender: 'female',
        age: 0,
        phone: '',
        email: '',
        role: '',
      };
    },
  },
});

export const profileSelectors = {
  get: (state: RootState): RootState['profile'] => state.profile,
};

export const { profileAdd, profileReset } = profileSlice.actions;
export default profileSlice.reducer;
