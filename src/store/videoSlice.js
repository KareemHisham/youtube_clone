import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseURL, options } from "../Data/API";
import axios from "axios";

// VideoFetching Function
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

// FetchVideoDetail Function
export const FetchVideoDetail = createAsyncThunk(
  "video/fetchDetail",
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

// FetchVideoDetail Function
export const FetchRelatedVideos = createAsyncThunk(
  "video/relatedVideos",
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
    videoDetail: [],
    relatedVideos: []
  },
  extraReducers: {
    // VideoFetching Function
    [VideoFetching.pending]: (state, _) => {
      state.isLoading = true;
    },
    [VideoFetching.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.videos = action.payload;
    },
    [VideoFetching.rejected]: (state, _) => {
      state.isLoading = true;
    },

    // FetchVideoDetail Function
    [FetchVideoDetail.pending]: (state, _) => {
      state.isLoading = true;
    },
    [FetchVideoDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.videoDetail = action.payload;
    },
    [FetchVideoDetail.rejected]: (state, _) => {
      state.isLoading = true;
    },

    // FetchRelatedVideos Function
    [FetchRelatedVideos.pending]: (state, _) => {
      state.isLoading = true;
    },
    [FetchRelatedVideos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.relatedVideos = action.payload;
    },
    [FetchRelatedVideos.rejected]: (state, _) => {
      state.isLoading = true;
    },
  },
});
export default VideoSlice.reducer;
