import { styled } from '@mui/material/styles';

import { Button } from '@mui/material';

export const RegisterForm = styled('div')(
  () => `
    width: 100%;
  `,
);

export const FormWrapper = styled('div')(
  ({ theme }) => `
    margin-bottom: 12px;
    border: 1px solid #dfe3e6;

    .title {
      background-color: #f7f7f8;
      padding: 12px;
      margin: 0;
      border-bottom: 1px solid #dfe3e6;
    }

    .content {
      background-color: ${theme.bg.bgWhite};
      padding: 12px;

      .guidanceText {
        display: block;
        color: ${theme.text.textExtraDark};
        margin-bottom: 12px;
      }
    }
  `,
);

export const PageHeader = styled('p')(
  () => `
    padding: 32px 0 64px 0;
  `,
);

export const RegisterWrapper = styled('div')(
  ({ theme }) => `
    padding: 12px 24px;

    .details-card {
      background-color: ${theme.bg.bgWhite};
      padding: 16px 12px;
      margin-bottom: 18px;
      border: 1px solid #dfe3e6;
      border-radius: 4px;
      border-left: 4px solid ${theme.colors.primary};
    }
  `,
);

export const StyledButton = styled(Button)(
  ({ theme }) => `
    background-color: ${theme.colors.primary};
    text-transform: none;
    border-radius: 8px;

    &:hover {
      background-color: ${theme.colors.primaryAccent};
    }
  `,
);

export const StyledOutlinedButton = styled(Button)(
  ({ theme }) => `
    text-transform: none;
    color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    border-radius: 8px;
    width: 160px;

    &:hover {
      border-color: ${theme.colors.primary};
      background-color: ${theme.colors.primary};
      color: ${theme.bg.bgWhite};
    }
  `,
);
