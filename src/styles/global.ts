import { createGlobalStyle } from 'styled-components';
import { normalize } from './normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-size: 1rem;
    line-height: 150%;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme.color['base-400']};
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme.color['base-100']};
  }

  :focus {
    outline: transparent;
    border-radius: ${(props) => props.theme.rounded.base};
    overflow: hidden;
    box-shadow: 0 0 0 2px ${(props) => props.theme.color['brand-600']};
  }

  ::selection {
		color: ${(props) => props.theme.color['base-200']};
    background-color: ${(props) => props.theme.color['brand-700']};
  }
  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: ${(props) => props.theme.color['base-400']};
  }
`;
