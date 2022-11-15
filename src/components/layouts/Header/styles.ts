import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md);
  background-color: ${props => props.theme["base-light"]};
  box-shadow: var(--shadow-base);
`