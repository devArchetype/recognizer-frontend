import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xxl};
  border-radius: ${(props) => props.theme.rounded.base};

  &.text-right {
    flex-direction: row-reverse;
  }

  img {
    width: 13rem;
    height: 100%;
    object-fit: cover;
  }
  p {
    text-align: justify;
    max-width: 50%;
  }

  @media (max-width: 860px) {
    justify-content: center;
    p {
      width: 100%;
      min-width: 73vw;
    }
  }
`;
