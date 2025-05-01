import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productDetails.slice";
import cartSlice from "../features/cart.slice";
import searchSlice from "../features/search.slice";

const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    search: searchSlice,
  },
});

export default store;
