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
    profileAdded(state, action) {
      state = action.payload;
    },
    profileReset(state) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state = {
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

export const { profileAdded, profileReset } = profileSlice.actions;
export default profileSlice.reducer;
