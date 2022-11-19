import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
`;

export const NavigationContainer = styled.nav`
  width: 100%;
  min-height: 0;
  display: flex;
  flex: 1;
  padding: 0;
  overflow-y: auto;
  box-shadow: ${(props) => props.theme.shadow.base};
  background-color: ${(props) => props.theme.color['base-light']};

  ul {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  @media ${(props) => props.theme.screen.sm} {
    width: clamp(180px, 20vw, 280px);
    padding: ${({ theme }) =>
      `${theme.spacing.xxl} ${theme.spacing.md} ${theme.spacing.md}`};
    position: sticky;
    inset: auto 0 0 0;

    ul {
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      padding: 0;
    }
  }
`;
