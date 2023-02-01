import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};

  @media ${(props) => props.theme.screen.sm} {
    gap: ${(props) => props.theme.spacing.md};
  }
`;


export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.sm};

  &.text-right {
    flex-direction: row-reverse;
  }

  img {
    width: 10rem;
    height: 10rem;
    filter: drop-shadow(4px 2px 4px rgba(0, 0, 0, 0.3));
  }

  p {
    width: 100%;
    text-align: justify;
  }

  @media ${(props) => props.theme.screen.sm} {
    gap: ${(props) => props.theme.spacing.xxl};

    p {
      max-width: 50%;
      text-align: auto;
    }

    img {
      width: 13rem;
      height: 13rem;
    }
  }
`;
