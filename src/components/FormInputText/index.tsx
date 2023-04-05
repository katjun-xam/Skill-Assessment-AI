import { StyledTextInput } from './styles';
import { theme } from 'theme';

import { TextFieldProps } from '@mui/material';

const FormInputText = (props: TextFieldProps) => {
  return <StyledTextInput {...props} sx={{ color: theme.colors.primaryAccent }} />;
};

export default FormInputText;
