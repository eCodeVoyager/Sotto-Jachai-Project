import { createAsyncThunk } from "@reduxjs/toolkit";
import ContentService from "@/services/ContentService";
export const fetchLoginUserContents = createAsyncThunk(
  "contents/fetchLoginUserContents",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await ContentService.getMyContent();
      return data;
    } catch (error) {
      // console.log("Error while fetching user contents.");
      // console.log(error);
      return rejectWithValue(error);
    }
  }
);
