import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addProduct: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.addProduct = [...state.addProduct, action.payload];
    },
    removeItemFromCart: (state, action) => {
      state.addProduct = state.addProduct.filter(
        (cartItem) => cartItem.id!== action.payload
      );
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
