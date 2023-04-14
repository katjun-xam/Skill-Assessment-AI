import { useAppSelector } from 'store';
import { FormWrapper } from 'pages/Register/styles';
import { FormCell, FormInputText } from 'components';
import { FormRow } from 'components/FormMain/styles';
import { selectRegisterState } from 'store/register/slice';
import { IUnknown } from 'components/FormInputText';
import useHandleChangeFieldValue from '../../hooks/useHandleChangeFieldValue';
import { useFormContext, UseFormRegister } from 'react-hook-form';

const FloatingLabelInputs = () => {
  const { registerFormData } = useAppSelector(selectRegisterState);
  const { email, address } = registerFormData;
  const { register } = useFormContext();
  const handleChangeFieldValue = useHandleChangeFieldValue();

  return (
    <FormWrapper>
      <h2 className="title">Inputs - Floating Label</h2>
      <div className="content">
        <FormRow>
          <FormCell cellWidth="100%">
            <FormInputText
              id="email"
              register={register as unknown as UseFormRegister<Partial<IUnknown>>}
              onChange={handleChangeFieldValue}
              value={email}
              label="E-mail"
            />
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell cellWidth="100%">
            <FormInputText
              id="address"
              register={register as unknown as UseFormRegister<Partial<IUnknown>>}
              onChange={handleChangeFieldValue}
              value={address}
              label="Residential address"
            />
          </FormCell>
        </FormRow>
      </div>
    </FormWrapper>
  );
};

export default FloatingLabelInputs;
