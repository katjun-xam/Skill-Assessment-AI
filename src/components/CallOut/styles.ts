import { styled } from '@mui/material/styles';

export const CallOutWrapper = styled('div')(
  ({ theme }) => `
    background-color: ${theme.bg.bgWhite};
    padding: 16px 12px;
    margin-bottom: 18px;
    border: 1px solid #dfe3e6;
    border-radius: 4px;
    border-left: 4px solid ${theme.colors.primary};
  `,
);
