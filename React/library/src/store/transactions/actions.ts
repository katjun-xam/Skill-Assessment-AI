import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTransactions } from './api';
import { ITransactionsState } from './types';

const getTransactions = (state: ITransactionsState) => {
  state.value = [
    {
      repaymentDate: '',
      repaymentAmount: 1,
      fees: 1,
      directDebitDate: '',
      directDebitAmount: 1,
      Status: '',
    },
  ];
};

export const actions = { getTransactions };

export const getTransactionsAsync = createAsyncThunk('transactions/fetchTransactions', async (amount: number) => {
  const response = await fetchTransactions(amount);

  return response.data;
});
