import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductById } from "../../../services/productDetails.api";

const initialState = {
  product: {
    title: "",
    brand: "",
    price: "",
    rating: "",
    thumbnail: "",
  },
};

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id) => {
    return await fetchProductById(id);
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProductById.fulfilled,(state,action)=>{
        state.product=action.payload;
    });
  },
});

export const {}= productSlice.actions;
export default productSlice.reducer;
