import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md);
  font-size: var(--text-sm);
  background-color: ${props => props.theme["base-light"]};

  a {
    color: ${props => props.theme["base-400"]};
  }
`