import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductById } from "../../../services/productDetailsApi";
import { getCards } from "../../../services/productListApi";

const initialState = {
  product: {
    title: "",
    brand: "",
    price: "",
    rating: "",
    thumbnail: "",
  },
  isLoading: false,
};

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id) => {
    return await fetchProductById(id);
  }
);

export const getProductsList = createAsyncThunk(
  "product/getProductsList",
  async (itemsPerPage) => {
    return await getCards(itemsPerPage, 0);
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    builder.addCase(getProductsList.fulfilled, (state, action) => {
      state.product = action.payload.products;
      state.isLoading = false;
    });
    builder.addCase(getProductsList.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
