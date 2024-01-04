import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    firstName: '',
    lastName: '',
    gender: 'female',
    age: 0,
    phone: '',
    email: '',
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
      };
    },
  },
});

export const { profileAdd, profileReset } = profileSlice.actions;
export default profileSlice.reducer;
