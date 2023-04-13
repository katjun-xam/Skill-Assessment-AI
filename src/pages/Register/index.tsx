import React from 'react';
import { PageTitle, FormMain } from 'components';
import { RegisterForm, RegisterWrapper } from './styles';
import StandardInputs from './components/StandardInputs';
import SideLabelInputs from './components/SideLabelInputs';
import FloatingLabelInputs from './components/FloatingLabelInputs';
import GridInputs from './components/GridInputs';
import InputFormButtons from './components/InputFormButtons';
import { useForm } from 'react-hook-form';

const Register: React.FunctionComponent = (): JSX.Element => {
  const { handleSubmit } = useForm();
  const formSubmitHandler = (e: React.FormEvent): void => {
    alert('Form Submitted!');
  };

  return (
    <RegisterWrapper>
      <PageTitle text="Register" />
      <RegisterForm>
        <FormMain onSubmit={formSubmitHandler}>
          <StandardInputs />
          <SideLabelInputs />
          <FloatingLabelInputs />
          <GridInputs />
          <InputFormButtons />
        </FormMain>
      </RegisterForm>
    </RegisterWrapper>
  );
};

export default Register;
