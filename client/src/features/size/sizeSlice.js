import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sizeService from "./sizeService";

export const getSizes = createAsyncThunk(
  "sizes/get-sizes",
  async (thunkAPI) => {
    try {
      return await sizeService.getSizes();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  size: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const sizeSlice = createSlice({
  name: "sizes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSizes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSizes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.size = action.payload;
    });
    builder.addCase(getSizes.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
    });
  },
});

export default sizeSlice.reducer;
