import { createSlice } from "@reduxjs/toolkit";
import { fetchLogInUser } from "./fetchLoginUser";

const initialState = {
  isAuthenticated: false,
  user: {
    id: "asdf",
    name: "Farshi",
    email: "devwithfarshi@gmail.com",
    role: "admin",
  },
  isLoading: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.isLoading = true;
    },
    loginUserData: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogInUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLogInUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(fetchLogInUser.rejected, (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
    });
  },
});

export const { logout, loginUserData } = authSlice.actions;

export default authSlice.reducer;
