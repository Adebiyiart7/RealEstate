import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const axiosOptions = {
  method: "GET",
  url: "https://zillow56.p.rapidapi.com/search",
  params: { location: "houston, tx" },
  headers: {
    "X-RapidAPI-Key": "2a12433f06mshbf87c62b3e65065p1dd61ejsn63bcdb50a242",
    "X-RapidAPI-Host": "zillow56.p.rapidapi.com"
  }
};

const initialState = {
  estates: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ""
};

export const getEstates = createAsyncThunk("estates/get", (_, thunkAPI) => {
  return axios
    .request(axiosOptions)
    .then(function (response) {
      return response.data.results;
    })
    .catch(function (error) {
      console.error(error.response.data);
      const message = error.response.data.message.toString();
      return thunkAPI.rejectWithValue(message);
    });
    
});

const estatesSlice = createSlice({
  name: "estate",
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

      // GET ESTATE
      .addCase(getEstates.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEstates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.estates = action.payload;
      })
      .addCase(getEstates.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export default estatesSlice.reducer;
export const { reset } = estatesSlice.actions;
