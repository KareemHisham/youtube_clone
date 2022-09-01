import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseURL, options } from "../Data/API";
import axios from "axios";
export const VideoFetching = createAsyncThunk(
  "video/fetch",
  async (url, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(`${BaseURL}/${url}`, options);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const VideoSlice = createSlice({
  name: "video",
  initialState: {
    selectedCategory: "New",
  },
  extraReducers: {
    [VideoFetching.pending]: (state, action) => {
      console.log("pending");
    },
    [VideoFetching.fulfilled]: (state, action) => {
      console.log("fulfilled");
      console.log({ action });
    },
    [VideoFetching.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});
export default VideoSlice.reducer;
