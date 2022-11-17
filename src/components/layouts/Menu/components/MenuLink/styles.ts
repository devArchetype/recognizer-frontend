import styled from 'styled-components';
import { screens } from '../../../../../styles/global';

export const NavigationItem = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    padding: var(--spacing-xs) var(--spacing-sm);
    line-height: 0;
    color: ${(props) => props.theme['base-400']};
    transition: all 0.1s ease-in-out;
    border-radius: var(--rounded-base);

    &.active {
      color: ${(props) => props.theme['base-200']};
      background-color: ${(props) => props.theme['brand-600']};
    }

    &:not(.active):hover {
      background-color: ${(props) => props.theme['base-100']};
    }

    span:first-child {
      font-size: calc(var(--text-xl) * 1.4);
    }

    span:last-child {
      display: none;
    }
  }
  @media ${screens.sm} {
    width: 100%;

    &:last-child {
      margin-top: auto;
    }

    a {
      span:last-child {
        display: block;
      }
    }
  }
`;
