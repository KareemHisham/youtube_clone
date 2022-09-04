import { configureStore } from "@reduxjs/toolkit";
import VideoSlice from "./videoSlice";
import ChannelSlice from "./channelSlice";

export const store = configureStore({
  reducer: { VideoSlice, ChannelSlice },
});
