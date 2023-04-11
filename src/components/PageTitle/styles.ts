import { styled } from '@mui/material/styles';

export const PageTitleContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Title = styled('div')(
  ({ theme }) => `
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: baseline;
    font-size: 23px;
    font-weight: 400;
    color: ${theme.colors.primary};
    @media all and (min-width: ${theme.breakpoints.md}) {
      flex-direction: row;
      font-size: 39px;
    }
  `,
);

export const EndElement = styled('div')(
  ({ theme }) => `
    font-size: 16px;
    margin-top: 8px;
    @media all and (min-width: ${theme.breakpoints.md}) {
      font-size: 20px;
      margin-top: 0;
    }
  `,
);

export const Icon = styled('div')(
  ({ theme }) => `
    text-align: center;
    border-radius: 50%;
    background-color: ${theme.colors.primaryAccent};
    color: ${theme.colors.primary};
    width: 75px;
    height: 75px;
    line-height: 75px;
    font-size: 29px;
  `,
);
