import { useAppSelector } from 'store';
import { FormWrapper } from 'pages/Register/styles';
import { FormCell, FormInputText } from 'components';
import { FormRow } from 'components/FormMain/styles';
import { selectRegisterState } from 'store/register/slice';
import { IUnknown } from 'components/FormInputText';
import useHandleChangeFieldValue from '../../hooks/useHandleChangeFieldValue';
import { useFormContext, UseFormRegister } from 'react-hook-form';

const SideLabelInputs = () => {
  const { registerFormData } = useAppSelector(selectRegisterState);
  const { firstName, lastName } = registerFormData;
  const { register } = useFormContext();
  const handleChangeFieldValue = useHandleChangeFieldValue();

  return (
    <FormWrapper>
      <h2 className="title">Inputs - Side Label</h2>
      <div className="content">
        <FormRow>
          <FormCell cellWidth="10%">
            <label htmlFor="firstname">First name</label>
          </FormCell>
          <FormCell cellWidth="85%">
            <FormInputText
              id="firstName"
              register={register as unknown as UseFormRegister<Partial<IUnknown>>}
              onChange={handleChangeFieldValue}
              value={firstName}
            />
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell cellWidth="10%">
            <label htmlFor="lastName">Last name</label>
          </FormCell>
          <FormCell cellWidth="85%">
            <FormInputText
              id="lastName"
              register={register as unknown as UseFormRegister<Partial<IUnknown>>}
              onChange={handleChangeFieldValue}
              value={lastName}
            />
          </FormCell>
        </FormRow>
      </div>
    </FormWrapper>
  );
};

export default SideLabelInputs;
