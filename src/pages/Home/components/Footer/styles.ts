import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacing.md};
  margin: 0 auto;

  a {
    color: ${(props) => props.theme.color['base-400']};
  }
`;
