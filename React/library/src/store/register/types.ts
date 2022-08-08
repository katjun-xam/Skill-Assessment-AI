export interface IRegisterFormData {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  country: string;
}

export interface IRegisterState {
  registerFormData: IRegisterFormData;
}
