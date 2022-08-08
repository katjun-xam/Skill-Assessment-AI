import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './App';
import GlobalStyles from './globalStyles';
import { lightTheme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
