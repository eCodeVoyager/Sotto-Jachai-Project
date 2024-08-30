import { createAsyncThunk } from "@reduxjs/toolkit";
import AdminService from "@/services/AdminService";
export const fetchUsersContents = createAsyncThunk(
  "allContents/fetchUsersContents",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await AdminService.getAllContents();
      return data.contents;
    } catch (error) {
      console.log("Error while fetching user contents. from admin");
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
