import styled from 'styled-components';

export const DefaultLayoutContainer = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  /* max-height: ${`${window.innerHeight}px`}; */
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;

export const LayoutSchema = styled.div`
  display: flex;
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: hidden;

  @media ${(props) => props.theme.screen.sm} {
    flex-direction: row;
  }
`;

export const PageContainer = styled.main`
  min-height: 0;
  flex: 1;
  display: flex;
  overflow-y: auto;
  flex-direction: column;

  @print {
    position: relative;
  }
`;
