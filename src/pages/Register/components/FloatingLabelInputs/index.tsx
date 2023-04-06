import { useAppSelector } from 'store';
import { FormWrapper } from 'pages/Register/styles';
import { FormCell, FormInputText } from 'components';
import { FormRow } from 'components/FormMain/styles';
import { selectRegisterState } from 'store/register/slice';
import useHandleChangeFieldValue from '../../hooks/useHandleChangeFieldValue';

const FloatingLabelInputs = () => {
  const { registerFormData } = useAppSelector(selectRegisterState);
  const { email, address } = registerFormData;
  const handleChangeFieldValue = useHandleChangeFieldValue();

  return (
    <FormWrapper>
      <h2 className="title">Inputs - Floating Label</h2>
      <div className="content">
        <FormRow>
          <FormCell cellWidth="100%">
            <FormInputText id="email" onChange={handleChangeFieldValue} value={email} label="E-mail" />
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell cellWidth="100%">
            <FormInputText id="address" onChange={handleChangeFieldValue} value={address} label="Residential address" />
          </FormCell>
        </FormRow>
      </div>
    </FormWrapper>
  );
};

export default FloatingLabelInputs;
