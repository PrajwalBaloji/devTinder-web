import { createSlice } from "@reduxjs/toolkit";

export const feed = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (_, action) => {
      return action.payload;
    },
    removeFeed: () => {
      return null;
    },
  },
});

export const { addFeed, removeFeed } = feed.actions;

export default feed.reducer;
