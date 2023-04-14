import { useAppSelector } from 'store';
import { FormWrapper, StyledButton } from 'pages/Register/styles';
import { FormCell, FormInputText } from 'components';
import { FormRow } from 'components/FormMain/styles';
import { selectRegisterState } from 'store/register/slice';
import { IUnknown } from 'components/FormInputText/types';
import { theme } from 'theme';
import useHandleChangeFieldValue from '../../hooks/useHandleChangeFieldValue';
import { useFormContext, UseFormRegister } from 'react-hook-form';

import { Search } from '@mui/icons-material';

const GridInputs = () => {
  const { registerFormData } = useAppSelector(selectRegisterState);
  const {
    firstName1,
    firstName2,
    firstName3,
    firstName4,
    firstName5,
    firstName6,
    firstName7,
    firstName8,
    firstName9,
    middleName3,
    middleName6,
    middleName9,
    lastName2,
    lastName3,
    lastName5,
    lastName6,
    lastName8,
    lastName9,
    address,
  } = registerFormData;
  const { register } = useFormContext();
  const handleChangeFieldValue = useHandleChangeFieldValue();

  const handleClickSearchAddress = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    alert('No results for: ' + address);
  };

  return (
    <FormWrapper>
      <h2 className="title">Inputs - Grid Style</h2>
      <div className="content">
        <FormRow>
          <FormCell cellWidth="10%">
            <label htmlFor="firstName1">First name 1</label>
          </FormCell>
          <FormCell cellWidth="85%">
            <FormInputText
              register={register as unknown as UseFormRegister<Partial<IUnknown>>}
              id="firstName1"
              onChange={handleChangeFieldValue}
              value={firstName1}
            />
          </FormCell>
        </FormRow>
        <div></div>
        <FormRow>
          <FormCell cellWidth="10%">
            <label htmlFor="firstName2">First name 2</label>
          </FormCell>
          <FormCell cellWidth="30%">
            <FormInputText
              id="firstName2"
              register={register as unknown as UseFormRegister<Partial<IUnknown>>}
              onChange={handleChangeFieldValue}
              value={firstName2}
            />
          </FormCell>
          <FormCell cellWidth="10%">
            <label htmlFor="lastName">Last name 2</label>
          </FormCell>
          <FormCell cellWidth="35%">
            <FormInputText
              id="lastName2"
              register={register as unknown as UseFormRegister<Partial<IUnknown>>}
              onChange={handleChangeFieldValue}
              value={lastName2}
            />
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell cellWidth="auto">
            <label htmlFor="firstName3">First name 3</label>
          </FormCell>
          <FormCell cellWidth="auto">
            <FormInputText
              id="firstName3"
              register={register as unknown as UseFormRegister<Partial<IUnknown>>}
              onChange={handleChangeFieldValue}
              value={firstName3}
            />
          </FormCell>
          <FormCell cellWidth="auto">
            <label htmlFor="middleName3" style={{ marginLeft: '8px' }}>
              Middle name 3
            </label>
          </FormCell>
          <FormCell cellWidth="auto">
            <FormInputText
              id="middleName3"
              register={register as unknown as UseFormRegister<Partial<IUnknown>>}
              onChange={handleChangeFieldValue}
              value={middleName3}
            />
          </FormCell>
          <FormCell cellWidth="auto">
            <label htmlFor="lastName3" style={{ marginLeft: '8px' }}>
              Last name 3
            </label>
          </FormCell>
          <FormCell cellWidth="auto">
            <FormInputText
              id="lastName3"
              register={register as unknown as UseFormRegister<Partial<IUnknown>>}
              onChange={handleChangeFieldValue}
              value={lastName3}
            />
          </FormCell>
        </FormRow>
        <div style={{ marginBottom: '12px' }}>
          <span>First name 4</span>
        </div>
        <FormRow>
          <FormCell cellWidth="auto">
            <FormInputText
              id="firstName4"
              register={register as unknown as UseFormRegister<Partial<IUnknown>>}
              value={firstName4}
              onChange={handleChangeFieldValue}
            />
          </FormCell>
        </FormRow>
        <FormRow>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div style={{ marginBottom: '12px' }}>
              <span>First name 5</span>
            </div>
            <FormCell cellWidth="auto">
              <FormInputText
                id="firstName5"
                register={register as unknown as UseFormRegister<Partial<IUnknown>>}
                value={firstName5}
                onChange={handleChangeFieldValue}
              />
            </FormCell>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '8px' }}>
            <div style={{ marginBottom: '12px' }}>
              <span>Last name 5</span>
            </div>
            <FormCell cellWidth="auto">
              <FormInputText
                id="lastName5"
                register={register as unknown as UseFormRegister<Partial<IUnknown>>}
                value={lastName5}
                onChange={handleChangeFieldValue}
              />
            </FormCell>
          </div>
        </FormRow>
        <FormRow>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div style={{ marginBottom: '12px' }}>
              <span>First name 6</span>
            </div>
            <FormCell cellWidth="auto">
              <FormInputText
                id="firstName6"
                register={register as unknown as UseFormRegister<Partial<IUnknown>>}
                value={firstName6}
                onChange={handleChangeFieldValue}
              />
            </FormCell>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '8px' }}>
            <div style={{ marginBottom: '12px' }}>
              <span>Middle name 6</span>
            </div>
            <FormCell cellWidth="auto">
              <FormInputText
                id="middleName6"
                register={register as unknown as UseFormRegister<Partial<IUnknown>>}
                value={middleName6}
                onChange={handleChangeFieldValue}
              />
            </FormCell>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '8px' }}>
            <div style={{ marginBottom: '12px' }}>
              <span>Last name 6</span>
            </div>
            <FormCell cellWidth="auto">
              <FormInputText
                id="lastName6"
                register={register as unknown as UseFormRegister<Partial<IUnknown>>}
                value={lastName6}
                onChange={handleChangeFieldValue}
              />
            </FormCell>
          </div>
        </FormRow>
        <FormRow>
          <FormCell cellWidth="100%">
            <FormInputText
              id="firstName7"
              register={register as unknown as UseFormRegister<Partial<IUnknown>>}
              onChange={handleChangeFieldValue}
              value={firstName7}
              label="First name 7"
            />
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell cellWidth="100%">
            <FormInputText
              id="firstName8"
              register={register as unknown as UseFormRegister<Partial<IUnknown>>}
              onChange={handleChangeFieldValue}
              value={firstName8}
              label="First name 8"
            />
            <div style={{ marginLeft: '8px', width: '100%' }}>
              <FormInputText
                id="lastName8"
                register={register as unknown as UseFormRegister<Partial<IUnknown>>}
                onChange={handleChangeFieldValue}
                value={lastName8}
                label="Last name 8"
              />
            </div>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell cellWidth="100%">
            <FormInputText
              id="firstName9"
              register={register as unknown as UseFormRegister<Partial<IUnknown>>}
              onChange={handleChangeFieldValue}
              value={firstName9}
              label="First name 9"
            />
            <div style={{ marginLeft: '8px', width: '100%' }}>
              <FormInputText
                id="middleName9"
                onChange={handleChangeFieldValue}
                value={middleName9}
                label="Middle name 9"
                register={register as unknown as UseFormRegister<Partial<IUnknown>>}
              />
            </div>
            <div style={{ marginLeft: '8px', width: '100%' }}>
              <FormInputText
                id="lastName9"
                register={register as unknown as UseFormRegister<Partial<IUnknown>>}
                onChange={handleChangeFieldValue}
                value={lastName9}
                label="Last name 9"
              />
            </div>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell cellWidth="70%">
            <FormInputText
              id="address"
              register={register as unknown as UseFormRegister<Partial<IUnknown>>}
              onChange={handleChangeFieldValue}
              value={address}
              label="Residential address"
            />
          </FormCell>
          <FormCell cellWidth="30%">
            <div style={{ height: '100%', width: '100%', marginLeft: '8px' }}>
              <StyledButton
                startIcon={<Search sx={{ color: theme.bg.bgWhite }} />}
                variant="contained"
                disabled={!address}
                onClick={handleClickSearchAddress}
                fullWidth
                disableElevation
                sx={{ height: '47px' }}
              >
                Search
              </StyledButton>
            </div>
          </FormCell>
        </FormRow>
      </div>
    </FormWrapper>
  );
};

export default GridInputs;
