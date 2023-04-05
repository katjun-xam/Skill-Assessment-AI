import { styled, css } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const StyledTextInput = styled(TextField)<{ isFloatingLabel?: boolean }>(
  ({ isFloatingLabel = false, theme }) => `
  width: 100%;
  background-color: ${theme.bg.bgWhite};
  border-radius: 8px !important;

  input {
    height: 16px;
    line-height: 16px;
    font-size: 16px !important;
    color: #001f2a;

    &::placeholder {
      color: #72787e;
      opacity: 1;
    }
  }

  .MuiOutlinedInput-root,.MuiPaper-root-MuiDialog-paper {
    border-radius: 8px !important;
  }

  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: ${theme.colors.primary};
    }
  }

  & label.Mui-focused {
    color: ${theme.colors.primary};
  }

  ${!isFloatingLabel && css`
    & legend {
      display: none;
    }

    & fieldset {
      top: 0;
    }
  `}
`
);
