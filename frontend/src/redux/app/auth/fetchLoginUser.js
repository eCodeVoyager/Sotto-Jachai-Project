import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookie from "js-cookie";
import AuthService from "@/services/AuthService";
import { routes } from "@/router/routes.data";
export const fetchLogInUser = createAsyncThunk(
  "auth/fetchLogInUser",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await AuthService.me();
      return data;
    } catch (error) {
      console.log("Error while fetching user data.");
      console.log(error);
      Cookie.remove("token");
      window.location.href = routes.login;
      return rejectWithValue(error);
    }
  }
);
