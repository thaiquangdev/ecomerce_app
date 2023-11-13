import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import colorService from "./colorService";

export const getColors = createAsyncThunk(
  "colors/get-colors",
  async (thunkAPI) => {
    try {
      return await colorService.getColor();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  color: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const colorSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getColors.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getColors.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.color = action.payload;
    });
    builder.addCase(getColors.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
    });
  },
});

export default colorSlice.reducer;
