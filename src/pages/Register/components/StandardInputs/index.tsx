import { useAppSelector } from 'store';
import { FormWrapper } from 'pages/Register/styles';
import { FormCell, FormInputText } from 'components';
import { FormRow } from 'components/FormMain/styles';
import { selectRegisterState } from 'store/register/slice';
import useHandleChangeFieldValue from '../../hooks/useHandleChangeFieldValue';

const StandardInputs = () => {
  const { registerFormData } = useAppSelector(selectRegisterState);
  const { city, country } = registerFormData;
  const handleChangeFieldValue = useHandleChangeFieldValue();

  return (
    <FormWrapper>
      <h2 className="title">Inputs - Standard</h2>
      <div className="content">
        <div style={{ marginBottom: '12px' }}>
          <span>City</span>
        </div>
        <FormRow>
          <FormCell cellWidth="100%">
            <FormInputText id="city" onChange={handleChangeFieldValue} value={city} />
          </FormCell>
        </FormRow>
        <div style={{ marginTop: '12px', marginBottom: '12px' }}>
          <span>Country</span>
        </div>
        <FormRow>
          <FormCell cellWidth="100%">
            <FormInputText id="country" onChange={handleChangeFieldValue} value={country} />
          </FormCell>
        </FormRow>
      </div>
    </FormWrapper>
  );
};

export default StandardInputs;
