import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
  name: 'error',
  initialState: {
    navigateResponse: '/',
  },
  reducers: {
    setNavigate: (state, action) => {
      state.navigateResponse = action.payload;
    },
    clearNavigate: (state) => {
      state.navigateResponse = '/';
    }
  }
});

export const {
  setNavigate,
  clearNavigate,
} = errorSlice.actions;

export default errorSlice.reducer;