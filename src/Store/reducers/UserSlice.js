import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  photo: '',
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      console.log(action.payload.photo);
      
    },
    setSignOutState: (state) => {
      state.name = '';
      state.email = '';
      state.photo = '';
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = UserSlice.actions;
export default UserSlice.reducer;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;