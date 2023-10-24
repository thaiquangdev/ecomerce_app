import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import prodCateService from "./prodCateService";

export const getProdCates = createAsyncThunk(
  "prodCategory/getProdCategories",
  async (thunkAPI) => {
    try {
      return await prodCateService.getProductCates();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  prodCategories: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const prodCateSlice = createSlice({
  name: "proCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProdCates.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProdCates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.prodCategories = action.payload;
      })
      .addCase(getProdCates.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default prodCateSlice.reducer;
