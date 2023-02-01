import styled from 'styled-components';

export const HomeContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.main`
  min-height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.screen.sm} {
    padding-top: ${(props) => props.theme.spacing.xxl};
  }
`;
