import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// LOCAL IMPORTS
import API_URI from "../api_uri";
console.log(API_URI);


const initialState = {
  profile: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ""
};

export const profile = createAsyncThunk(
  "profile",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(API_URI + "/users/profile", data);
      if (response.data) {
        return response.data.body;
      }
    } catch (error) {
      const message = error.response.data.body.message.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(profile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(profile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile = action.payload;
      })
      .addCase(profile.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
  }
});

export default profileSlice.reducer;
export const { reset } = profileSlice.actions;
