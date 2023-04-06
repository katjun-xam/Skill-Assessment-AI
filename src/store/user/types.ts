export interface IIdentity {
  title: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export interface IUserState {
  identity: IIdentity;
  isLogged: boolean;
  status: 'idle' | 'loading' | 'failed';
}
