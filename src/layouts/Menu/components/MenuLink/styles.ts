import styled from 'styled-components';

export const NavigationItem = styled.li`
  a {
    height: calc(${(props) => props.theme.spacing.lg} + 8px);
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.spacing.xs};
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
    line-height: 0;
    color: ${(props) => props.theme.color['base-400']};
    transition: all 0.1s ease-in-out;
    border-radius: ${(props) => props.theme.rounded.base};

    &.active {
      color: ${(props) => props.theme.color['base-200']};
      background-color: ${(props) => props.theme.color['brand-600']};
    }

    &:not(.active):hover {
      background-color: ${(props) => props.theme.color['base-100']};
    }

    span:first-child {
      font-size: calc(${(props) => props.theme.text.xl} * 1.4);
    }

    span:last-child {
      display: none;
    }
  }
  @media ${(props) => props.theme.screen.sm} {
    width: 100%;

    a {
      span:last-child {
        display: block;
      }
    }
  }
`;
