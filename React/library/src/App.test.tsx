import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';
import App from './App';
import TestThemeProvider from 'utils/test-utils/TestThemeProvider';

it('renders correctly', () => {
  const { getByText } = render(
    <Provider store={store}>
      <TestThemeProvider>
        <App />
      </TestThemeProvider>
    </Provider>,
  );

  expect(getByText(/React Accelerator Showcase/i)).toBeInTheDocument();
});
