import styled from 'styled-components';
import { SrOnly } from '../../styles/utils';

export const LogoContainer = styled.h2`
  display: flex;
  align-items: center;
  gap: 1px;
  color: ${(props) => props.theme.color['base-dark']};

  span {
    font-weight: ${(props) => props.theme.font.medium};
    font-size: ${(props) => props.theme.text.xl};
  }
`;

export const ImageContainer = styled.div`
  width: 32px;
  height: 32px;

  img {
    width: 32px;
    height: 32px;
  }

  span {
    ${SrOnly};
  }
`;
