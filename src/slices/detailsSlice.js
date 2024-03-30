import { createSlice } from '@reduxjs/toolkit';

const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    item: {},
    isLoading: false,
    error: null
  },
  reducers: {
    detailsRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    detailsSuccess: (state, action) => {
      state.isLoading = false;
      state.item = action.payload;
    },
    detailsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    detailsClear: (state) => {
      state.isLoading = false;
      state.item = {};
    },
    resetDetailsError: (state) => {
      state.error = null;
    }
  }
});

export const {
  detailsRequest,
  detailsSuccess,
  detailsFailure,
  detailsClear,
  resetDetailsError,
} = detailsSlice.actions;

export default detailsSlice.reducer;