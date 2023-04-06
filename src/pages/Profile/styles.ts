import { styled } from '@mui/material/styles';

import { Button } from '@mui/material';

export const ProfileSettings = styled('div')(
  ({ theme }) => `
    & > div:first-child {
      display: flex;
      h2 {
        align-self: center;
        margin: 0px 0px 0px 20px;
      }
    }
    & > div:nth-child(2) {
      margin: 20px 0px;
      & > div:nth-child(2) {
        display: flex;
        align-items: center;
        margin-top: 2px;
        h6 {
          margin: 0px 5px 0px 0px;
        }
      }
      & > div:nth-child(3) {
        margin-top: 20px;
        width: 25%;
        @media all and (max-width: ${theme.breakpoints.sm}) {
          width: 100%;
        }
      }
    }
  `,
);

export const ProfileWrapper = styled('div')(
  () => `
    padding: 12px 24px;
    height: 100%;

    .profileHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
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
