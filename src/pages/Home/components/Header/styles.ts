import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 20;
  padding: ${(props) => props.theme.spacing.md};
  box-shadow: ${(props) => props.theme.shadow.base};
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.xxl};
  /* background-color: ${(props) => props.theme.color['base-light']}; */

  &.sticky {
    background-color: ${(props) => props.theme.color['base-light']};
  }

  li,
  button,
  a,
  a:visited,
  a:link {
    cursor: pointer;
    position: relative;
    color: ${(props) => props.theme.color['base-dark']};
    box-shadow: none;
    font-weight: ${(props) => props.theme.font.regular};
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: ${(props) => props.theme.spacing.xxl};
`;

export const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: ${(props) => props.theme.spacing.lg};

  li::after {
    content: '';
    position: absolute;
    bottom: -0.3rem;
    left: 50%;
    width: 0;
    height: 0.2rem;
    background-color: ${(props) => props.theme.color['brand-600']};
    transition: all 300ms ease-in-out;
  }

  li:hover::after {
    width: 50%;
    left: 25%;
  }

  :focus {
    box-shadow: 0 0 0 2px red;
  }
`;
