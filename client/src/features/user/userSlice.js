import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userSerivce from "./userService";

export const getUsers = createAsyncThunk("user/get-users", async (thunkAPI) => {
  try {
    return await userSerivce.getUsers();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = {
  user: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default userSlice.reducer;
