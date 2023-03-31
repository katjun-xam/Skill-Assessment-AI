import { IRegisterFormData, IRegisterState } from './types';

export const defaultRegisterFormData: IRegisterFormData = {
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  country: '',
};

export const initialState: IRegisterState = {
  registerFormData: defaultRegisterFormData,
};
