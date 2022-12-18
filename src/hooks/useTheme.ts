import { useEffect, useState } from 'react';

type Themes = 'light' | 'dark';

interface useThemeProps {
  theme: Themes;
  isDark: boolean;
  toggleTheme: () => void;
}

const getTheme = () => {
  const storedTheme = localStorage.getItem('theme') as Themes;
  const preferedIsDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  if (storedTheme) return storedTheme;
  if (preferedIsDark) return 'dark';

  return 'light';
};

export const useTheme = (): useThemeProps => {
  const [theme, setTheme] = useState(getTheme);
  const isDark = theme === 'dark';

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return {
    theme,
    isDark,
    toggleTheme,
  };
};
