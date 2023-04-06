import { PayloadAction } from '@reduxjs/toolkit';
import { defaultRegisterFormData } from './initialState';
import { IRegisterFormData, IRegisterState } from './types';

const setRegisterFormData = (state: IRegisterState, action: PayloadAction<IRegisterFormData>) => {
  state.registerFormData = action.payload;
};

const resetRegisterFormData = (state: IRegisterState) => {
  state.registerFormData = defaultRegisterFormData;
};

export const actions = { setRegisterFormData, resetRegisterFormData };
