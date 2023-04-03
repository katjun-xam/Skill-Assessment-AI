import { createStyles, makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

const theme = useTheme();

const useGlobalStyles = makeStyles(() =>
  createStyles({
    '@global': {
      body: {
        fontFamily: 'Roboto',
        margin: '0',
        background: theme.bg.bgLight,
      },
      main: {
        padding: '0',
      },
      a: {
        color: theme.colors.primary,
      },
      h1: {
        fontSize: '20px',
        '@media all and (min-width: theme.breakpoints.lg)': {
          fontSize: '26px',
        },
      },
      h2: {
        fontSize: '16px',
        '@media all and (min-width: theme.breakpoints.lg)': {
          fontSize: '22px',
        },
      },
      h3: {
        fontSize: '12px',
        '@media all and (min-width: theme.breakpoints.lg)': {
          fontSize: '18px',
        },
      },
    },
  }),
);

const GlobalStyles = () => {
  useGlobalStyles();

  return null;
};

export default GlobalStyles;
