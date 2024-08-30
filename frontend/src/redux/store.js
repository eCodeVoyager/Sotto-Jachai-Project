import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./app/auth/authSlice";
import contentReducer from "./app/content/contentSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    content: contentReducer,
  },
});
