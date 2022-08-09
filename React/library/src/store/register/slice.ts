import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { actions } from './actions';
import { initialState } from './initialState';

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: actions,
});

export const selectRegisterState = (state: RootState) => state.register;
export const { setRegisterFormData, resetRegisterFormData } = registerSlice.actions;
export default registerSlice.reducer;
