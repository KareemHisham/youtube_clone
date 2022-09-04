import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseURL, options } from "../Data/API";
import axios from "axios";

// Channel Fetching Function
export const ChannelFetching = createAsyncThunk(
  "channel/fetch",
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

// Channel Video Fetching Function

export const ChannelVideoFetching = createAsyncThunk(
  "channel/videos",
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

const ChannelSlice = createSlice({
  name: "channel",
  initialState: {
    isLoading: false,
    channelInfo: {},
    channelVideos: [],
  },
  extraReducers: {
    // Channel Fetching Function
    [ChannelFetching.pending]: (state, action) => {
      state.isLoading = true;
    },
    [ChannelFetching.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.channelInfo = action.payload;
    },
    [ChannelFetching.rejected]: (state, action) => {
      state.isLoading = true;
    },

    // ChannelVideoFetching Function
    [ChannelVideoFetching.pending]: (state, action) => {
      state.isLoading = true;
    },
    [ChannelVideoFetching.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.channelVideos = action.payload;
    },
    [ChannelVideoFetching.rejected]: (state, action) => {
      state.isLoading = true;
    },
  },
});

export default ChannelSlice.reducer;
