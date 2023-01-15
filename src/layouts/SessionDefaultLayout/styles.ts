import styled from 'styled-components';

export const DefaultLayoutContainer = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;

  @media ${(props) => props.theme.screen.sm} {
    padding: ${(props) => props.theme.spacing.md};
  }
`;
