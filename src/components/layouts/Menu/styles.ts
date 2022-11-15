import styled from 'styled-components'
import { screens } from '../../../styles/global'

export const MenuContainer = styled.div`
  display: flex;
`

export const NavigationContainer = styled.nav`
  width: 100%;
  min-height: 64px;
  display: flex;
  flex: 1;
  padding: 0;
  overflow-y: auto;
  box-shadow: var(--shadow-base);
  background-color: ${(props) => props.theme['base-light']};

  ul {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  @media ${screens.sm} {
    width: clamp(180px, 20vw, 280px);
    padding: var(--spacing-xxl) var(--spacing-md) var(--spacing-md);

    ul {
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      padding: 0;
    }
  }
`
