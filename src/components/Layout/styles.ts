import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const PageContainer = styled('main')(
  ({ theme }) => `
    background-color: ${theme.bg.bgLight};

    @media all and (min-width: ${theme.breakpoints.sm}) {
      max-width: ${theme.pageWidth};
      margin: 0 auto;
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
    width: 120px;

    &:hover {
      border-color: ${theme.colors.primary};
      background-color: ${theme.colors.primary};
      color: ${theme.bg.bgWhite};

      svg {
        fill: ${theme.bg.bgWhite};
      }
    }
  `,
);
