import { IRegisterFormData, IRegisterState } from './types';

export const defaultRegisterFormData: IRegisterFormData = {
  firstName: '',
  firstName1: '',
  firstName2: '',
  firstName3: '',
  firstName4: '',
  firstName5: '',
  firstName6: '',
  firstName7: '',
  firstName8: '',
  firstName9: '',
  middleName3: '',
  middleName6: '',
  middleName9: '',
  lastName: '',
  lastName2: '',
  lastName3: '',
  lastName5: '',
  lastName6: '',
  lastName8: '',
  lastName9: '',
  email: '',
  address: '',
  city: '',
  country: '',
};

export const initialState: IRegisterState = {
  registerFormData: defaultRegisterFormData,
};
