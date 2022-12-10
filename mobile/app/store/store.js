import { configureStore } from "@reduxjs/toolkit";

// LOCAL IMPORTS
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  }
})

export default store;