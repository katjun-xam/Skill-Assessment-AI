import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { defaultRegisterFormData, initialState } from './initialState';
import { IRegisterFormData } from './types';

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setRegisterFormData: (state, action: PayloadAction<IRegisterFormData>) => {
      state.registerFormData = action.payload;
    },
    resetRegisterFormData: (state) => {
      state.registerFormData = defaultRegisterFormData;
    },
  },
});

export const selectRegisterState = (state: RootState) => state.register;
export const { setRegisterFormData, resetRegisterFormData } = registerSlice.actions;
export default registerSlice.reducer;
