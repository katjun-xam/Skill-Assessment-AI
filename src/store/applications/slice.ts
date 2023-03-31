import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { fetchApplications } from './api';
import { initialState } from './initialState';

export const getApplicationsAsync = createAsyncThunk('applications/fetchApplications', async () => {
  const response = await fetchApplications();
  return response.data;
});

export const applicationsSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getApplicationsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getApplicationsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});

export const selectApplications = (state: RootState) => state.applications;
export const {} = applicationsSlice.actions;
export default applicationsSlice.reducer;
