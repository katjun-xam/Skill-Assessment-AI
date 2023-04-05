import { createStyles, makeStyles } from '@mui/styles';

const useGlobalStyles = makeStyles(() =>
  createStyles({
    '@global': {
      body: {
        fontFamily: 'Roboto',
        margin: '0',
        background: '#EFF2F5',
      },
      main: {
        padding: '0',
      },
      a: {
        color: '#6247B4',
      },
      h1: {
        fontSize: '20px',
        '@media all and (min-width: 1200px)': {
          fontSize: '26px',
        },
      },
      h2: {
        fontSize: '16px',
        '@media all and (min-width: 1200px)': {
          fontSize: '22px',
        },
      },
      h3: {
        fontSize: '12px',
        '@media all and (min-width: 1200px)': {
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
