import styled from "styled-components";
import { SrOnly } from "../../styles/utils";

export const LogoContainer = styled.h2`
  display: flex;
  align-items: center;
  gap: 1px;
  color: ${props => props.theme["base-dark"]};

  span {
    font-weight: var(--font-medium);
    font-size: var(--text-xl);
  }
`

export const ImageContainer = styled.div`
  width: 32px;
  height: 32px;
  
  img {
      width: inherit;
      height: inherit;
  }

  span {
    ${SrOnly};
  }
`