import styled, { css } from 'styled-components';
import { SubscriptionTier } from '../../@types/tier';

export const SubscriptionCardContainer = styled.li`
  max-width: 260px;
  position: relative;
  z-index: 1;
`;

interface CardContentProps {
  disabled: boolean;
}

export const CardContent = styled.article<CardContentProps>`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${(props) => props.theme.spacing.md};
  padding: ${(props) => props.theme.spacing.md};
  box-shadow: ${(props) => props.theme.shadow.lg};
  border-radius: ${(props) => props.theme.rounded.base};
  background-color: ${(props) => props.theme.color['base-light']};

  button:last-child {
    width: 100%;
    align-self: center;
    justify-content: center;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      pointer-events: none;
    `}
`;

interface HeadingProps {
  tier: SubscriptionTier;
}

export const Heading = styled.header<HeadingProps>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xxs};

  div {
    line-height: 0;
    font-size: ${(props) => props.theme.text.xl};
  }

  strong {
    font-weight: ${(props) => props.theme.font.medium};
    font-size: ${(props) => props.theme.text.xl};
    color: ${(props) => props.theme.color['base-700']};
  }

  ${({ tier }) => {
    switch (tier) {
      case 'FREE': {
        return css`
          div {
            color: ${(props) => props.theme.color['base-400']};
          }
        `;
      }
      case 'PRO': {
        return css`
          div {
            color: ${(props) => props.theme.color['brand-600']};
          }
        `;
      }
      case 'PREMIUM': {
        return css`
          div {
            color: ${(props) => props.theme.color['warning-base']};
          }
        `;
      }
    }
  }}
`;

export const Description = styled.p``;

export const Price = styled.div`
  font-size: calc(${(props) => props.theme.text.xxl} * 2);
  color: ${(props) => props.theme.color['base-700']};
  line-height: 100 %;

  &::before {
    content: 'R$';
    font-size: ${(props) => props.theme.text.xxl};
    color: ${(props) => props.theme.color['base-600']};
  }

  &::after {
    content: 'por mês';
    font-size: ${(props) => props.theme.text.md};
    color: ${(props) => props.theme.color['base-400']};
  }
`;

export const DetailsContainer = styled.div`
  strong {
    font-weight: ${(props) => props.theme.font.medium};
    color: ${(props) => props.theme.color['base-700']};
  }
`;

export const DetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${(props) => props.theme.spacing.xxs};
  padding-top: ${(props) => props.theme.spacing.xs};
`;

export const DetailItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xxs};

  span {
    line-height: 0;
    font-size: ${(props) => props.theme.text.lg};
    color: ${(props) => props.theme.color['success-base']};
  }
`;

export const CardBadge = styled.div`
  position: absolute;
  inset: ${({ theme }) =>
    `-${theme.spacing.xs} -${theme.spacing.xs} auto auto`};
  z-index: 2;
  padding: ${(props) => props.theme.spacing.xxs};
  color: ${(props) => props.theme.color['success-dark']};
  border-radius: ${(props) => props.theme.rounded.base};
  font-weight: ${(props) => props.theme.font.medium};
  box-shadow: ${(props) => props.theme.shadow.base};
  background: ${(props) => props.theme.color['success-base']};
`;
