import { Field, FormInputTextContainer, Label } from './styles';
import { FormInputTextProps } from './types';

const FormInputText = ({ name, label, floatingLabel, value, hasError, onChange }: FormInputTextProps) => {
  return (
    <FormInputTextContainer>
      {label && !floatingLabel && <Label htmlFor={name}>{label}</Label>}
      <Field type="text" name={name} id={name} value={value} hasError={hasError} onChange={onChange} placeholder=" " />
      {floatingLabel && (
        <Label htmlFor={name} floatingLabel={floatingLabel}>
          {label}
        </Label>
      )}
    </FormInputTextContainer>
  );
};

export default FormInputText;
