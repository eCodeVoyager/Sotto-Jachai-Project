import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./app/auth/authSlice";
import contentReducer from "./app/content/contentSlice";
import adminContentReducer from "./app/admin/adminContentSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    content: contentReducer,
    adminContent: adminContentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});
