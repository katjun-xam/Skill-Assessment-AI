export interface IRegisterFormData {
  firstName: string;
  firstName1: string;
  firstName2: string;
  firstName3: string;
  firstName4: string;
  firstName5: string;
  firstName6: string;
  firstName7: string;
  firstName8: string;
  firstName9: string;
  middleName3: string;
  middleName6: string;
  middleName9: string;
  lastName: string;
  lastName2: string;
  lastName3: string;
  lastName5: string;
  lastName6: string;
  lastName8: string;
  lastName9: string;
  email: string;
  address: string;
  city: string;
  country: string;
}

export type IFormType =
  | 'firstName'
  | 'firstName1'
  | 'firstName2'
  | 'firstName3'
  | 'firstName4'
  | 'firstName5'
  | 'firstName6'
  | 'firstName7'
  | 'firstName8'
  | 'firstName9'
  | 'middleName3'
  | 'middleName6'
  | 'middleName9'
  | 'lastName'
  | 'lastName2'
  | 'lastName3'
  | 'lastName5'
  | 'lastName6'
  | 'lastName8'
  | 'lastName9'
  | 'email'
  | 'address'
  | 'city'
  | 'country';

export interface IRegisterState {
  registerFormData: IRegisterFormData;
}
