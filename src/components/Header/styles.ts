import { styled } from '@mui/material/styles';

import { Button } from '@mui/material';

export const HeaderMainContainer = styled('header')(
  ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.bg.bgWhite};
    padding: 8px 24px;

    @media all and (min-width: ${theme.breakpoints.sm}) {
      padding: 16px 24px;
    }

    min-height: 52px;
    border-bottom: 1px solid ${theme.border.borderColorLight};
  `,
);

export const HeaderContainer = styled('div')(
  ({ theme }) => `
    flex: 1 0 auto;
    display: flex;
    max-width: ${theme.pageWidth};
    margin: 0 auto;
  `,
);

export const HeaderContent = styled('div')`
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-end;
`;

export const LogoContainer = styled('div')`
  width: 120px;
  margin-right: 12px;
  display: flex;
  align-items: center;
`;

export const TitleContainer = styled('div')`
  display: flex;
  align-items: center;
`;

export const TitleText = styled('h1')(
  ({ theme }) => `
    display: none;
    margin: 0;
    font-size: 30px;
    @media all and (min-width: ${theme.breakpoints.md}) {
      display: block;
    }
  `,
);

export const HeaderNavigationSticky = styled('nav')(
  ({ theme }) => `
    display: flex;
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    height: 85px;
    width: 100%;
    @media all and (min-width: ${theme.breakpoints.md}) {
      display: none;
    }
  `,
);

export const HeaderNavigationStickyItem = styled('div')<{ selected: boolean }>(
  ({ selected, theme }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 33%;
    background-color: ${selected ? theme.colors.primary : theme.colors.primaryAccent};
    &:not(:first-of-type):not(:last-child) {
      border-left: 2px solid ${theme.bg.bgWhite};
      border-right: 2px solid ${theme.bg.bgWhite};
    }
    & a {
      color: ${theme.text.textExtraLight};
      text-decoration: none;
    }
  `,
);

export const HeaderNavigation = styled('nav')(
  ({ theme }) => `
    display: none;
    @media all and (min-width: ${theme.breakpoints.md}) {
      display: flex;
      margin-right: 36px;
    }

    * {
      height: 100%;
      display: flex;
      align-items: center;
    }
  `,
);

export const HeaderEndElement = styled('div')`
  display: flex;
  justify-content: center;
`;

export const StyledTextButton = styled(Button)(
  ({ theme }) => `
    color: ${theme.colors.primary};
    text-transform: none;
    text-decoration: underline ${theme.colors.primary};
    font-size: 16px;

    &:hover {
      background-color: transparent;
      color: ${theme.colors.primaryAccent};
      text-decoration: underline ${theme.colors.primaryAccent};
    }
  `
);
