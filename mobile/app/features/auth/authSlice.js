import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// LOCAL IMPORTS
export const API_URI = "http://192.168.43.231:5000/api";

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
      const response = await axios.post(API_URI + "/users/register", data);
      if (response.data) {
        AsyncStorage.setItem("user", JSON.stringify(response.data.body));
        return response.data.body;
      }
    } catch (error) {
      const message = error.response.data.body.message.toString();
      console.log(message);
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
