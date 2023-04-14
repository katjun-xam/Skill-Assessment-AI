import React from 'react';
import { PageTitle, FormMain } from 'components';
import { RegisterForm, RegisterWrapper } from './styles';
import StandardInputs from './components/StandardInputs';
import SideLabelInputs from './components/SideLabelInputs';
import FloatingLabelInputs from './components/FloatingLabelInputs';
import GridInputs from './components/GridInputs';
import InputFormButtons from './components/InputFormButtons';
import { FormProvider, useForm } from 'react-hook-form';
import { useAppSelector } from 'store';
import { selectRegisterState } from 'store/register/slice';

const Register: React.FunctionComponent = (): JSX.Element => {
  const { registerFormData } = useAppSelector(selectRegisterState);
  const methods = useForm({ defaultValues: { ...registerFormData } });
  const formSubmitHandler = (): void => {
    alert('Form Submitted!');
  };

  return (
    <RegisterWrapper>
      <PageTitle text="Register" />
      <RegisterForm>
        <FormProvider {...methods}>
          <FormMain onSubmit={methods.handleSubmit(formSubmitHandler)}>
            <StandardInputs />
            <SideLabelInputs />
            <FloatingLabelInputs />
            <GridInputs />
            <InputFormButtons />
          </FormMain>
        </FormProvider>
      </RegisterForm>
    </RegisterWrapper>
  );
};

export default Register;
