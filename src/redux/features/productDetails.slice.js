import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductById } from "../../services/productDetailsApi";
import { getCards } from "../../services/productListApi";

const initialState = {
  product: {
    title: "",
    brand: "",
    price: "",
    rating: "",
    thumbnail: "",
    reviews:[],
  },
  isLoading: false,
  totalItems: 0,
};
// Used each product info
export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id) => {
    return await fetchProductById(id);
  }
);

//Used for product list info
export const getProductsList = createAsyncThunk(
  "product/getProductsList",
  async ({ itemsPerPage, skip }) => {
    return await getCards(itemsPerPage, skip);
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    // when each product is render in UI
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    // when product list is render in UI
    builder.addCase(getProductsList.fulfilled, (state, action) => {
      state.product = action.payload.products;
      state.totalItems = action.payload.total;
      state.isLoading = false;
    });
    // When page initially load
    builder.addCase(getProductsList.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
