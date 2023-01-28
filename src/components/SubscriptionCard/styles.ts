import styled from 'styled-components';

export const SubscriptionCardContainer = styled.li`
  max-width: 260px;

  /* @media ${(props) => props.theme.screen.sm} {
    &:nth-child(even) {
      transform: translateY(-${(props) => props.theme.spacing.xl});
    }
  } */
`;

export const CardContent = styled.article`
  width: 100%;
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
`;

export const Heading = styled.header`
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
`;

export const Description = styled.p``;

export const Price = styled.div`
  font-size: calc(${(props) => props.theme.text.xxl} * 2);
  color: ${(props) => props.theme.color['base-700']};
  line-height: 100%;

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
    font-size: ${(props) => props.theme.text.xl};
  }
`;
