import styled from 'styled-components';

interface HeaderContainerProps {
  isScrolling: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  inset: 0 0 auto 0;
  transition: all 200ms;
  z-index: 30;
  background-color: ${({ theme, isScrolling }) =>
    isScrolling ? theme.color['base-light'] : 'transparent'};
  box-shadow: ${({ theme, isScrolling }) =>
    isScrolling ? theme.shadow.base : 'none'};
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacing.md};
  margin: 0 auto;

  button {
    position: relative;
    z-index: 30;
  }

  @media ${(props) => props.theme.screen.md} {
    button {
      display: none;
    }
  }
`;
