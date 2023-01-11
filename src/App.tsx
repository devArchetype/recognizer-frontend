import { ReactNode, useContext } from 'react';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
  PreferencesContext,
  PreferencesContextProvider,
} from './contexts/PreferencesContext';
import { Router } from './routes/Router';
import { queryClient } from './services/reactQuery/client';
import { GlobalStyle } from './styles/global';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

interface ThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const { currentTheme } = useContext(PreferencesContext);
  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

export const App = () => {
  return (
    <PreferencesContextProvider>
      <ThemeContextProvider>
        <GlobalStyle />

        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <ToastContainer position="top-right" pauseOnHover={false} />
        </QueryClientProvider>
      </ThemeContextProvider>
    </PreferencesContextProvider>
  );
};
