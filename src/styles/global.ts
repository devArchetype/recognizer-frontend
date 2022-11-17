import { createGlobalStyle } from 'styled-components';
import { normalize } from './normalize';

export const screens = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  xxl: '(min-width: 1536px)',
};

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  :root {
    --spacing-xs: 0.5rem;
    --spacing-sm: 0.875rem;
    --spacing-md: 1rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --spacing-xxl: 4rem;

    --font-light: 300;
    --font-regular: 400;
    --font-medium: 500;
    --font-bold: 700;

    --text-xs: 0.75rem;
    --text-sm: 0.875rem;
    --text-md: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-xxl: 1.875rem;

    --rounded-base: 6px;
    --rounded-full: 9999px;

    --bg-translucent: rgba(0, 0, 0, 0.4);

    --shadow-base: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
      0px 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
      0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  body {
    font-size: 1rem;
    line-height: 150%;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme['base-400']};
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme['base-100']};
  }

  :focus {
    outline: transparent;
    border-radius: var(--rounded-base);
    box-shadow: 0 0 0 2px ${(props) => props.theme['brand-600']};
  }

  ::selection {
		color: ${(props) => props.theme['base-200']};
    background-color: ${(props) => props.theme['brand-700']};
  }
  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-400']};
  }
`;
