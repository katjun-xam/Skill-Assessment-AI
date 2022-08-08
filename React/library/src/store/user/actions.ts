import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchUser } from './api';
import { IUserState } from './types';

const getUser = (state: IUserState) => {
  return {
    ...state,
    identity: {
      title: 'Mr',
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '2021-09-13T00:00:00.000Z',
    },
    isLogged: true,
  };
};

const updateUser = (state: IUserState, action: PayloadAction<{ firstName: string; lastName: string }>) => {
  return {
    ...state,
    identity: {
      ...state.identity,
      firstName: action.payload.firstName || 'John',
      lastName: action.payload.lastName || 'Doe',
    },
  };
};

// this variable will include all defined actions above and will be passed to `reducer` object in slice.ts
export const actions = { getUser, updateUser };

export const getUserAsync = createAsyncThunk('user/fetchUser', async () => {
  const response = await fetchUser();

  return response.data;
});
