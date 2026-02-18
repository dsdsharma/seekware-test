import { productSlice } from "@/app/store/productSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: productSlice.reducer
})