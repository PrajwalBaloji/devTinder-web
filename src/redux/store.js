import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user";
import feedReducer from "./slice/feed";
import connectionReducer from "./slice/connection";
import requestReducer from "./slice/request";

export const store = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connection: connectionReducer,
    request: requestReducer,
  },
});
