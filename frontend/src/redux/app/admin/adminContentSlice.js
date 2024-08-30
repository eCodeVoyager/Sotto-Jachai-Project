import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersContents } from "./fetchUsersContents";

const initialState = {
  isLoading: true,
  allContents: [],
};

export const adminContentSlice = createSlice({
  name: "adminContent",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsersContents.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsersContents.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allContents = action.payload;
    });
    builder.addCase(fetchUsersContents.rejected, (state) => {
      state.isLoading = false;
      state.allContents = [];
    });
  },
});

export default adminContentSlice.reducer;
