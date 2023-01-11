import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.md};
  font-size: ${(props) => props.theme.text.sm};
  box-shadow: ${(props) => props.theme.shadow.base};
  background-color: ${(props) => props.theme.color['base-light']};

  a {
    color: ${(props) => props.theme.color['base-400']};
  }
`;
