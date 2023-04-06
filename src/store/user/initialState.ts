import { IUserState } from './types';

export const initialState: IUserState = {
  identity: {
    title: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '1899-12-31T14:00:00.000Z',
  },
  isLogged: false,
  status: 'idle',
};
