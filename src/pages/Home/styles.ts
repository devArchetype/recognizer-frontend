import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: ${`${window.innerHeight}px`};
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;

export const MainContainer = styled.main`
  min-height: 0;
  flex: 1;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
`;

export const SectionContainer = styled.section`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: ${`${window.innerHeight}px`};
  display: flex;
  flex-direction: column;
  overflow-y: hidden;

  &#top {
    background-image: url('../.././../public/images/bg.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
