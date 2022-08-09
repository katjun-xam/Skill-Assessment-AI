import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { actions, getTransactionsAsync } from './actions';
import { initialState } from './initialState';

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: actions,
  extraReducers: (builder) => {
    builder
      .addCase(getTransactionsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTransactionsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});

export const selectTransactions = (state: RootState) => state.transactions;
export const { getTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;
