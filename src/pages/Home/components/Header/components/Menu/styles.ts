import styled from 'styled-components';

interface MenuContainerProps {
  displayMenu: boolean;
}

export const MenuContainer = styled.div<MenuContainerProps>`
  width: clamp(200px, 20vw, 280px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
  position: fixed;
  inset: 0 -100% 0 auto;
  inset: ${(props) => props.displayMenu && '0 0 0 auto'};
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.md}`};
  transition: all 400ms ease-in-out;
  box-shadow: ${(props) => props.theme.shadow.base};
  overflow-y: auto;
  list-style: none;
  background-color: ${(props) => props.theme.color['base-light']};

  ul button {
    display: flex;
    color: ${(props) => props.theme.color['base-800']};
  }

  @media ${(props) => props.theme.screen.md} {
    width: 100%;
    position: static;
    flex-direction: row;
    padding: 2px;
    gap: ${(props) => props.theme.spacing.xs};
    background-color: transparent;
    box-shadow: none;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};

  @media ${(props) => props.theme.screen.md} {
    flex-direction: row;
    gap: ${(props) => props.theme.spacing.xs};
  }
`;

export const MenuItem = styled.li`
  width: 100%;
  position: relative;
  text-align: center;
  cursor: pointer;
  font-weight: ${(props) => props.theme.font.medium};

  a {
    width: 100%;
    display: block;
    padding: ${(props) => props.theme.spacing.xs};
    color: ${(props) => props.theme.color['base-800']};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: ${(props) => props.theme.color['brand-600']};
    transition: all 200ms ease-in-out;
  }

  &:hover {
    a {
      color: ${(props) => props.theme.color['brand-700']};
    }

    &::after {
      width: 50%;
      left: 25%;
    }
  }

  @media ${(props) => props.theme.screen.md} {
    width: auto;
  }
`;

export const ActionsWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.md};
`;
