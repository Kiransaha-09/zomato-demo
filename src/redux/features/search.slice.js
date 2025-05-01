import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSearchProduct } from "../../services/productSearchaApi";

const initialState = {
  isLoading: false,
  searchResults: [],
  totalSearchItems: 0,
  searchText: "",
};

export const getSearchProduct = createAsyncThunk(
  "search/getSearchProduct",
  async ({ searchText, itemsPerPage, skip }) => {
    return await fetchSearchProduct(searchText, itemsPerPage, skip);
  }
);
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSearchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchResults = action.payload.products;
      state.totalSearchItems = action.payload.total;
    });
    builder.addCase(getSearchProduct.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getSearchProduct.pending, (state) => {
      state.isLoading = true;
    });
  },
});
export const {setSearchText} = searchSlice.actions;
export default searchSlice.reducer;
