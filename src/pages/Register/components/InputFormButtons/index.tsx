import React from 'react';
import { FormWrapper, StyledButton, StyledOutlinedButton } from 'pages/Register/styles';
import { FormCell } from 'components';
import { FormRow } from 'components/FormMain/styles';
import { theme } from 'theme';
import { useAppDispatch } from 'store';
import { resetRegisterFormData } from 'store/register/slice';

import { CheckCircleOutline } from '@mui/icons-material';

const InputFormButtons = () => {
  const dispatch = useAppDispatch();

  const handleClickReset = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    dispatch(resetRegisterFormData());
  };

  return (
    <FormWrapper>
      <h2 className="title">Form Buttons</h2>
      <div className="content">
        <FormRow>
          <FormCell>
            <StyledOutlinedButton
              size="large"
              variant="outlined"
              onClick={handleClickReset}
              sx={{ marginRight: '20px' }}
            >
              Reset Fields
            </StyledOutlinedButton>
            <StyledButton
              size="large"
              variant="contained"
              disableElevation
              endIcon={<CheckCircleOutline sx={{ color: theme.bg.bgWhite }} />}
              sx={{ width: '160px' }}
              type="submit"
            >
              Confirm
            </StyledButton>
          </FormCell>
        </FormRow>
      </div>
    </FormWrapper>
  );
};

export default InputFormButtons;
