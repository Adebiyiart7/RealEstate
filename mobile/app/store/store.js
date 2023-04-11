import { configureStore } from "@reduxjs/toolkit";

// LOCAL IMPORTS
import authReducer from "../features/auth/authSlice";
import estateReducer from "../features/estate/estateSlice";
import profileReducer from "../features/profile/profileSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    estate: estateReducer,
    profile: profileReducer,
  }
});

export default store;