import { theme } from '../../theme';

import { ThemeProvider } from '@mui/material/styles';

type TestThemeProviderProps = {
  children: JSX.Element;
};

const TestThemeProvider = ({ children }: TestThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default TestThemeProvider;
