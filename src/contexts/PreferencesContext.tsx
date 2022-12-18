import { createContext, ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';
import { useTheme } from '../hooks/useTheme';
import { DarkTheme } from '../styles/themes/dark';
import { LightTheme } from '../styles/themes/light';

interface PreferencesContextTypes {
  currentTheme: DefaultTheme;
  isDark: boolean;
  toggleTheme: () => void;
}

interface PreferencesContextProviderProps {
  children: ReactNode;
}

export const PreferencesContext = createContext({} as PreferencesContextTypes);

export const PreferencesContextProvider = ({
  children,
}: PreferencesContextProviderProps) => {
  const { theme, isDark, toggleTheme } = useTheme();

  const appThemes = {
    light: LightTheme,
    dark: DarkTheme,
  };
  const currentTheme = appThemes[theme];

  return (
    <PreferencesContext.Provider value={{ currentTheme, isDark, toggleTheme }}>
      {children}
    </PreferencesContext.Provider>
  );
};
