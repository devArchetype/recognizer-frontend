import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: ${`${window.innerHeight}px`};
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  background-image: url('/images/bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;
