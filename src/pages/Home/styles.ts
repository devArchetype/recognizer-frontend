import styled from 'styled-components';
import { NotSrOnly, SrOnly } from '../../styles/utils';

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

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 20;
  padding: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.color['base-light']};
  box-shadow: ${(props) => props.theme.shadow.base};

  article div {
    ${SrOnly};
  }

  @media ${(props) => props.theme.screen.sm} {
    article div {
      ${NotSrOnly};
    }
  }
`;
