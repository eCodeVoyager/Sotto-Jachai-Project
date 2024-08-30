import { createSlice } from "@reduxjs/toolkit";
import { fetchLoginUserContents } from "./fetchLoginUserContents";

const initialState = {
  isLoading: true,
  contents: [],
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchLoginUserContents.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLoginUserContents.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = action.payload;
    });
    builder.addCase(fetchLoginUserContents.rejected, (state) => {
      state.isLoading = false;
      state.contents = [];
    });
  },
});

export default contentSlice.reducer;
