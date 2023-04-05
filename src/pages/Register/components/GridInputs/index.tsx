import { useAppSelector } from 'store';
import { FormWrapper, StyledButton } from 'pages/Register/styles';
import { FormCell, FormInputText } from 'components';
import { FormRow } from 'components/FormMain/styles';
import { selectRegisterState } from 'store/register/slice';
import { theme } from 'theme';
import useHandleChangeFieldValue from '../../hooks/useHandleChangeFieldValue';

import { Search } from '@mui/icons-material';

const GridInputs = () => {
  const { registerFormData } = useAppSelector(selectRegisterState);
  const { firstName, middleName, lastName, address } = registerFormData;
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
            <label htmlFor="firstName">First name</label>
          </FormCell>
          <FormCell cellWidth="85%">
            <FormInputText id="firstName" onChange={handleChangeFieldValue} value={firstName} />
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell cellWidth="10%">
            <label htmlFor="lastName">Last name</label>
          </FormCell>
          <FormCell cellWidth="30%">
            <FormInputText id="firstName" onChange={handleChangeFieldValue} value={firstName} />
          </FormCell>
          <FormCell cellWidth="10%">
            <label htmlFor="lastName">Last name</label>
          </FormCell>
          <FormCell cellWidth="35%">
            <FormInputText id="lastName" onChange={handleChangeFieldValue} value={lastName} />
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell cellWidth="auto">
            <label htmlFor="firstName">First name</label>
          </FormCell>
          <FormCell cellWidth="auto">
            <FormInputText id="firstName" onChange={handleChangeFieldValue} value={lastName} />
          </FormCell>
          <FormCell cellWidth="auto">
            <label htmlFor="middleName" style={{ marginLeft: '8px' }}>
              Middle name
            </label>
          </FormCell>
          <FormCell cellWidth="auto">
            <FormInputText id="middleName" onChange={handleChangeFieldValue} value={middleName} />
          </FormCell>
          <FormCell cellWidth="auto">
            <label htmlFor="lastName" style={{ marginLeft: '8px' }}>
              Last name
            </label>
          </FormCell>
          <FormCell cellWidth="auto">
            <FormInputText id="lastName" onChange={handleChangeFieldValue} value={lastName} />
          </FormCell>
        </FormRow>
        <div style={{ marginBottom: '12px' }}>
          <span>First name</span>
        </div>
        <FormRow>
          <FormCell cellWidth="auto">
            <FormInputText id="firstName" value={firstName} onChange={handleChangeFieldValue} />
          </FormCell>
        </FormRow>
        <FormRow>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div style={{ marginBottom: '12px' }}>
              <span>First name</span>
            </div>
            <FormCell cellWidth="auto">
              <FormInputText id="firstName" value={firstName} onChange={handleChangeFieldValue} />
            </FormCell>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '8px' }}>
            <div style={{ marginBottom: '12px' }}>
              <span>Last name</span>
            </div>
            <FormCell cellWidth="auto">
              <FormInputText id="lastName" value={lastName} onChange={handleChangeFieldValue} />
            </FormCell>
          </div>
        </FormRow>
        <FormRow>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div style={{ marginBottom: '12px' }}>
              <span>First name</span>
            </div>
            <FormCell cellWidth="auto">
              <FormInputText id="firstName" value={firstName} onChange={handleChangeFieldValue} />
            </FormCell>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '8px' }}>
            <div style={{ marginBottom: '12px' }}>
              <span>Middle name</span>
            </div>
            <FormCell cellWidth="auto">
              <FormInputText id="middleName" value={middleName} onChange={handleChangeFieldValue} />
            </FormCell>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '8px' }}>
            <div style={{ marginBottom: '12px' }}>
              <span>Last name</span>
            </div>
            <FormCell cellWidth="auto">
              <FormInputText id="lastName" value={lastName} onChange={handleChangeFieldValue} />
            </FormCell>
          </div>
        </FormRow>
        <FormRow>
          <FormCell cellWidth="100%">
            <FormInputText id="firstName" onChange={handleChangeFieldValue} value={firstName} label="First name" />
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell cellWidth="100%">
            <FormInputText id="firstName" onChange={handleChangeFieldValue} value={firstName} label="First name" />
            <div style={{ marginLeft: '8px', width: '100%' }}>
              <FormInputText id="lastName" onChange={handleChangeFieldValue} value={lastName} label="Last name" />
            </div>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell cellWidth="100%">
            <FormInputText id="firstName" onChange={handleChangeFieldValue} value={firstName} label="First name" />
            <div style={{ marginLeft: '8px', width: '100%' }}>
              <FormInputText id="middleName" onChange={handleChangeFieldValue} value={middleName} label="Middle name" />
            </div>
            <div style={{ marginLeft: '8px', width: '100%' }}>
              <FormInputText id="lastName" onChange={handleChangeFieldValue} value={lastName} label="Last name" />
            </div>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell cellWidth="70%">
            <FormInputText id="address" onChange={handleChangeFieldValue} value={address} label="Residential address" />
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
