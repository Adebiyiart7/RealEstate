import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// LOCAL IMPORTS
import { API_URI } from "../config";
let user = { username: "Adebiyiart" }; // TODO: Replace with null

const initialState = {
  user: user,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const hardCodedUser = {
  username: "Adebiyiart",
  fullname: "Adeeyo Joseph Adebiyi",
  email: "test@gmail.com",
  token: "FakeToken",
};

// TODO: UNCOMMNET THIS
// export const register = createAsyncThunk(
//   "auth/register",
//   async (data, thunkAPI) => {
//     try {
//       const response = await axios.post(API_URI + "/users/register", data);
//       if (response.data) {
//         AsyncStorage.setItem("@user", JSON.stringify(response.data.body));
//         return response.data.body;
//       }
//     } catch (error) {
//       const message = error.response.data.body.message.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// TODO: REMOVE THIS
export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      AsyncStorage.setItem("@user", JSON.stringify(hardCodedUser));
      return hardCodedUser;
    } catch (error) {
      const message = error.response.data.body.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// TODO: UNCOMMNET THIS
// export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
//   try {
//     const response = await axios.post(API_URI + "/users/login", data);
//     if (response.data) {
//       AsyncStorage.setItem("@user", JSON.stringify(response.data.body));
//       return response.data.body;
//     }
//   } catch (error) {
//     const message = error.response.data.body.message.toString();
//     return thunkAPI.rejectWithValue(message);
//   }
// });

// TODO: REMOVE THIS
export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    return hardCodedUser;
  } catch (error) {
    const message = error.response.data.body.message.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuth: (state) => {
      state.user = null;
    },
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    setUser: (state, user) => {
      state.user = user.payload;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder

      // REGISTER
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
      })

      // LOGIN
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default authSlice.reducer;
export const { clearAuth, reset, setUser } = authSlice.actions;
