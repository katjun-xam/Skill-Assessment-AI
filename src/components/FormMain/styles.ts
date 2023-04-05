import { styled } from '@mui/material/styles';

export const FormMainContainer = styled('form')(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: ${theme.border.borderRadiusMd};
    background-color: ${theme.bg.bgLight};
    padding: 12px;
  `,
);

export const FormRow = styled('div')(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;

    & > *:not(:last-child) {
      margin-bottom: 8px;
    }

    @media all and (min-width: ${theme.breakpoints.md}) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & > *:not(:last-child) {
        margin-bottom: 0;
      }
    }
  `,
);
