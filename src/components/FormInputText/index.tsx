import { StyledTextInput } from './styles';
import { theme } from 'theme';
import { IFormType, IRegisterFormData } from 'store/register/types';
import { UseFormRegister } from 'react-hook-form';

import { TextFieldProps } from '@mui/material';

export interface IUnknown {
  [key: string]: string;
}

type IFormInputText = Partial<TextFieldProps> & {
  register: UseFormRegister<Partial<IUnknown>>;
  id: string;
};

const FormInputText = (props: IFormInputText) => {
  const { id, register } = props;

  return <StyledTextInput {...register(id)} {...props} sx={{ color: theme.colors.primaryAccent }} />;
};

export default FormInputText;
