import { styled } from '@mui/material/styles';

import { Button } from '@mui/material';

export const TransactionsWrapper = styled('div')(
  ({ theme }) => `
    background-color: ${theme.bg.bgWhite};
    border: 1px solid #dfe3e6;
    border-radius: 4px;

    .transactionTitle {
      background-color: #f7f7f8;
      padding: 12px;
      margin: 0;
      border-bottom: 1px solid #dfe3e6;
    }

    .content {
      padding: 12px;

      .guidanceText {
        display: block;
        color: ${theme.text.textExtraDark};
        margin-bottom: 12px;
      }
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
