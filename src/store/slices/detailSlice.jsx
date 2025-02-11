// detailSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  data: {
    image:"https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_640.png",
    description:"You must be auth"
  },
  loading: false,
  error: null,
};

// Create an async thunk to fetch details from the API
export const fetchDetail = createAsyncThunk('details/fetchDetail', async () => {
  const response = await axios.get('your-api-url/details');
  return response.data;
});

// Create an async thunk to post detail to the API
export const postDetail = createAsyncThunk('details/postDetail', async (detail) => {
  const response = await axios.post('your-api-url/details', detail);
  return response.data;
});

// Create an async thunk to delete detail from the API
export const deleteDetail = createAsyncThunk('details/deleteDetail', async (id) => {
  await axios.delete(`your-api-url/details/${id}`);
  return id;
});

// Create a slice for details
const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    // Additional reducers for synchronous actions if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(postDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter((detail) => detail.id !== action.payload);
      })
      .addCase(deleteDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const { /* additional synchronous action creators if needed */ } = detailSlice.actions;
export default detailSlice.reducer;
