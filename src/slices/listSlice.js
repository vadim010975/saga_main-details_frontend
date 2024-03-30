import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'list',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  reducers: {
    listRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    listSuccess: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    listFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    resetListError: (state) => {
      state.error = null;
    }
  }
});

export const {
  listRequest,
  listSuccess,
  listFailure,
  resetListError,
} = listSlice.actions;

export default listSlice.reducer;
