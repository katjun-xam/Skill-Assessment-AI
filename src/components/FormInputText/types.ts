import { UseFormRegister } from 'react-hook-form';

import { TextFieldProps } from '@mui/material';

export interface IUnknown {
  [key: string]: string;
}

export type IFormInputText = Partial<TextFieldProps> & {
  register?: UseFormRegister<Partial<IUnknown>>;
  id: string;
};
