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
    videos: [],
    isLoading: false,
  },
  extraReducers: {
    [VideoFetching.pending]: (state, action) => {
      state.isLoading = true;
    },
    [VideoFetching.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.videos = action.payload;
    },
    [VideoFetching.rejected]: (state, action) => {
      state.isLoading = true;
    },
  },
});
export default VideoSlice.reducer;
