import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      primary: string;
      primaryAccent: string;
      secondary: string;
      secondaryAccent: string;
      error: string;
    };
    bg: {
      bgWhite: string;
      bgLight: string;
      bgMedium: string;
      bgDark: string;
    };
    border: {
      borderRadiusLg: string;
      borderColorLight: string;
      borderRadiusMd: string;
      borderRadiusSm: string;
    };
    button: {
      btPadding: string;
      btHeight: string;
    };
    disabled: {
      disabled: string;
      disabledDark: string;
    };
    text: {
      textWhite: string;
      textExtraLight: string;
      textLight: string;
      textMedium: string;
      textDark: string;
      textExtraDark: string;
      textBlack: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
    pageWidth: string;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors?: {
      primary?: string;
      primaryAccent?: string;
      secondary?: string;
      secondaryAccent?: string;
      error?: string;
    };
    bg?: {
      bgWhite?: string;
      bgLight?: string;
      bgMedium?: string;
      bgDark?: string;
    };
    border?: {
      borderRadiusLg?: string;
      borderColorLight?: string;
      borderRadiusMd?: string;
      borderRadiusSm?: string;
    };
    button?: {
      btPadding?: string;
      btHeight?: string;
    };
    disabled?: {
      disabled?: string;
      disabledDark?: string;
    };
    text?: {
      textWhite?: string;
      textExtraLight?: string;
      textLight?: string;
      textMedium?: string;
      textDark?: string;
      textExtraDark?: string;
      textBlack?: string;
    };
    breakpoints?: {
      sm?: string;
      md?: string;
      lg?: string;
    };
    pageWidth?: string;
  }
}

export const theme = createTheme({
  colors: {
    // PRIMARY
    primary: '#6247B4',
    primaryAccent: '#A698DD',
    // SECONDARY
    secondary: '#B81237',
    secondaryAccent: '#DC6C84',
    error: '#DD4411',
  },
  bg: {
    bgWhite: '#FFF',
    bgLight: '#EFF2F5',
    bgMedium: '#CCCCCC',
    bgDark: 'rgba(30,30,30,0.5)',
  },
  border: {
    borderColorLight: '#DFE3E6',
    // UI
    borderRadiusLg: '12px',
    borderRadiusMd: '8px',
    borderRadiusSm: '4px',
  },
  button: {
    btPadding: '0px 42px',
    btHeight: '52px',
  },
  text: {
    // TEXT
    textWhite: '#FFF',
    textExtraLight: '#DDD',
    textLight: '#C7C7C7',
    textMedium: '#BBB',
    textDark: '#AAA',
    textExtraDark: '#555',
    textBlack: '#000',
  },
  breakpoints: {
    sm: '480px',
    md: '900px',
    lg: '1200px',
  },
  pageWidth: '100%',
});
