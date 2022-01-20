import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    primaryAccent: string;
    secondary: string;
    secondaryAccent: string;
    bgWhite: string;
    bgLight: string;
    bgDark: string;
    disabled: string;
    disabledDark: string;
    borderRadiusMd: string;
    borderRadiusSm: string;
    btPadding: string;
    btHeight: string;
    textWhite: string;
    textExtraLight: string;
    textLight: string;
    textMedium: string;
    textDark: string;
    textExtraDark: string;
    textBlack: string;
  }
}
