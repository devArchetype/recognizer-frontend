import styled from 'styled-components'
import { screens } from '../../../styles/global'
import { NotSrOnly, SrOnly } from '../../../styles/utils'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 20;
  padding: var(--spacing-md);
  background-color: ${(props) => props.theme['base-light']};
  box-shadow: var(--shadow-base);

  article div {
    ${SrOnly};
  }

  @media ${screens.sm} {
    article div {
      ${NotSrOnly};
    }
  }
`
