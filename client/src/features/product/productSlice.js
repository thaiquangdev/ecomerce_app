import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (id, thunkAPI) => {
    try {
      return await productService.getProduct(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getProductPanigates = createAsyncThunk(
  "product/getProductPanigates",
  async ({ page, limit }, thunkAPI) => {
    try {
      return await productService.getProductPanigates(page, limit);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const filterProduct = createAsyncThunk(
  "product/getProductFilter",
  async (
    { page, limit, category, colors, sizes, priceMin, priceMax },
    thunkAPI
  ) => {
    try {
      return await productService.filter(
        page,
        limit,
        category,
        colors,
        sizes,
        priceMin,
        priceMax
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  products: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getProductPanigates.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductPanigates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProductPanigates.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(filterProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(filterProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(filterProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default productSlice.reducer;
