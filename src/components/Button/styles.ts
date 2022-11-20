import styled, { css } from 'styled-components';
import { SrOnly } from '../../styles/utils';

interface ButtonProps {
  iconLeft: boolean;
  variant: 'primary' | 'secondary' | 'line' | 'icon';
}

export const ButtonContainer = styled.button<ButtonProps>`
  height: calc(${(props) => props.theme.spacing.lg} + 8px);
  display: flex;
  flex-direction: ${(props) => (props.iconLeft ? 'row' : 'row-reverse')};
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  white-space: nowrap;
  font-size: ${(props) => props.theme.text.md};
  cursor: pointer;
  border-radius: ${(props) => props.theme.rounded.base};

  span {
    font-weight: ${(props) => props.theme.font.medium};
  }

  ${({ variant, iconLeft }) => {
    switch (variant) {
      case 'primary': {
        return css`
          color: ${(props) => props.theme.color['base-light']};
          background-color: ${(props) => props.theme.color['brand-600']};

          &:hover {
            background-color: ${(props) => props.theme.color['brand-700']};
          }
        `;
      }
      case 'secondary': {
        return css`
          color: ${(props) => props.theme.color['base-dark']};
          background-color: ${(props) => props.theme.color['base-200']};

          &:hover {
            background-color: ${(props) => props.theme.color['base-300']};
          }
        `;
      }
      case 'line': {
        return css`
          position: relative;
          padding: ${({ theme }) => `${theme.spacing.xs} ${0} ${0}`};
          color: ${(props) => props.theme.color['brand-600']};
          background-color: transparent;

          &::before {
            content: '';
            width: 0%;
            height: 2px;
            position: absolute;
            inset: ${iconLeft ? 'auto 0 0 auto' : 'auto auto 0 0'};
            transition: 0.2s;
            background-color: ${(props) => props.theme.color['brand-700']};
          }

          &:hover {
            color: ${(props) => props.theme.color['brand-700']};

            &::before {
              width: 100%;
            }
          }
        `;
      }
      case 'icon': {
        return css`
          padding: ${({ theme }) => theme.spacing.xxs};
          font-size: ${(props) => props.theme.text.xl};
          color: ${(props) => props.theme.color['base-400']};
          background-color: transparent;

          span:last-child {
            ${SrOnly};
          }

          &:hover {
            color: ${(props) => props.theme.color['base-500']};
          }
        `;
      }
    }
  }}
`;

export const Label = styled.span`
  line-height: 0;
  font-weight: ${(props) => props.theme.font.medium};
`;

export const Icon = styled.span`
  font-size: ${(props) => props.theme.text.xl};
  line-height: 0;
  font-weight: ${(props) => props.theme.font.medium};
`;
