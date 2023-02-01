import { ReactNode, useContext } from 'react';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ThemeProvider } from 'styled-components';
import { AuthContextProvider } from './contexts/AuthContext';
import {
  PreferencesContext,
  PreferencesContextProvider,
} from './contexts/PreferencesContext';
import { Router } from './routes/Router';
import { queryClient } from './services/reactQuery/client';
import { GlobalStyle } from './styles/global';

interface ThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const { currentTheme } = useContext(PreferencesContext);
  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

export const App = () => {
  const { themeName } = useContext(PreferencesContext);

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <PreferencesContextProvider>
          <ThemeContextProvider>
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>
              <Router />
              <ToastContainer
                position="top-right"
                pauseOnHover={false}
                theme={themeName}
              />
            </QueryClientProvider>
          </ThemeContextProvider>
        </PreferencesContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};
