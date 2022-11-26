import styled from 'styled-components';

export const PreferencesMenuContainer = styled.div`
  display: flex;
`;

export const NavigationContainer = styled.nav`
  width: 100%;
  min-height: 0;
  display: flex;
  flex: 1;
  overflow-y: auto;

  ul {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: ${(props) => props.theme.spacing.xxs};
    padding: ${({ theme }) => theme.spacing.xxs};
  }

  ul li a:not(.active):hover {
    background-color: ${(props) => props.theme.color['base-200']};
  }

  @media ${(props) => props.theme.screen.sm} {
    width: clamp(180px, 20vw, 280px);

    ul {
      align-items: flex-start;
      flex-direction: column;
    }
  }
`;
