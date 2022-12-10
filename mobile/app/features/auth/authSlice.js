import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// LOCAL IMPORTS
import authService from "./authService";
let user = null;

const initialState = {
  user: user,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ""
};

export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      const response = await authService.register(data);
      return response;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export default authSlice.reducer;
export const { reset } = authSlice.actions;
