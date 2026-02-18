import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: {
      list: [],
      loading: true,
      error: null,
      selectedProduct: null,
    },
  },
  reducers: {
    updateProducts: (state, payload) => {
      console.log(payload);
      state.products.list = payload.payload;
    },
    selectProduct: (state, payload) => {
      if (state.products?.selectedProduct?.id === payload.payload.id) {
        state.products.selectedProduct = null;
      } else {
        state.products.selectedProduct = payload.payload;
      }
    },
    removeSelectedProduct: (state) => {
      state.products.selectedProduct = null;
    },
  },
});

export const { updateProducts, selectProduct, removeSelectedProduct } =
  productSlice.actions;
