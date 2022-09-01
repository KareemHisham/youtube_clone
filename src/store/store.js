import { configureStore } from "@reduxjs/toolkit";
import VideoSlice from "./videoSlice";

export const store = configureStore({
  reducer: { VideoSlice },
});
