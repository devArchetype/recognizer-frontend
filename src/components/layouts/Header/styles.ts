import styled from 'styled-components';
import { NotSrOnly, SrOnly } from '../../../styles/utils';

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
