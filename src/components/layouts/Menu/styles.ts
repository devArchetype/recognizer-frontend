import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  box-shadow: ${(props) => props.theme.shadow.base};

  @media ${(props) => props.theme.screen.sm} {
    box-shadow: none;
  }
`;

export const NavigationContainer = styled.nav`
  width: 100%;
  min-height: 0;
  display: flex;
  flex: 1;
  padding: 0;
  overflow-y: auto;
  background-color: ${(props) => props.theme.color['base-light']};

  ul {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: ${(props) => props.theme.spacing.xxs};
  }

  @media ${(props) => props.theme.screen.sm} {
    width: clamp(180px, 20vw, 280px);
    padding: ${({ theme }) =>
      `${theme.spacing.xxl} ${theme.spacing.md} ${theme.spacing.md}`};
    position: sticky;
    inset: auto 0 0 0;
    box-shadow: ${(props) => props.theme.shadow.base};

    ul {
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      padding: 0;
    }
  }
`;
