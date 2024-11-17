import { createSlice } from '@reduxjs/toolkit';

export const itemSlice = createSlice({
  name: 'popup',
  initialState: {
    isOpen: false,
    selectedProduct: null,
  },
  reducers: {
    openProductDetails: (state, action) => {
      state.isOpen = true;
      state.selectedProduct = action.payload;
    },
    closeProductDetails: state => {
      state.isOpen = false;
      state.selectedProduct = null;
    },
  },
});

export const { openProductDetails, closeProductDetails } = itemSlice.actions;

export default itemSlice.reducer;
