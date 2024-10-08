import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersContents } from "./fetchUsersContents";

const initialState = {
  isLoading: true,
  allContents: [],
};

export const adminContentSlice = createSlice({
  name: "adminContent",
  initialState,
  reducers: {
    createAdminContent: (state, action) => {
      state.allContents.push(action.payload);
    },
    contentStatusUpdate: (state, { payload }) => {
      const { postId, status } = payload;
      const index = state.allContents.findIndex(
        (content) => content._id === postId
      );
      state.allContents[index].status = status;
    },
    contentDelete: (state, { payload }) => {
      const { postId } = payload;
      const index = state.allContents.findIndex(
        (content) => content._id === postId
      );
      state.allContents.splice(index, 1);
    },
  },
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

export const { contentStatusUpdate, contentDelete, createAdminContent } =
  adminContentSlice.actions;
export default adminContentSlice.reducer;
