import { lightTheme } from '../../theme';

import { ThemeProvider } from 'styled-components';

type TestThemeProviderProps = {
  children: JSX.Element;
};

const TestThemeProvider = ({ children }: TestThemeProviderProps) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

export default TestThemeProvider;
