import { StyledTextInput } from './styles';
import { IFormInputText } from './types';
import { theme } from 'theme';

const FormInputText = (props: IFormInputText) => {
  const { id, register } = props;
  const registerValues = register ? { ...register(id) } : {};

  return <StyledTextInput {...registerValues} {...props} sx={{ color: theme.colors.primaryAccent }} />;
};

export default FormInputText;
