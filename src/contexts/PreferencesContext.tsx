import { ReactNode, createContext } from 'react';
import { DefaultTheme } from 'styled-components';
import { Themes, useTheme } from '../hooks/useTheme';
import { DarkTheme } from '../styles/themes/dark';
import { LightTheme } from '../styles/themes/light';

interface PreferencesContextTypes {
  themeName: Themes;
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
  const themeName = theme;

  return (
    <PreferencesContext.Provider
      value={{ currentTheme, themeName, isDark, toggleTheme }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};
