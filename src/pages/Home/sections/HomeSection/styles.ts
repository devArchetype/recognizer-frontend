import styled from 'styled-components';

export const ImageContainer = styled.div`
  display: flex;
  border-radius: ${(props) => props.theme.rounded.base};
  box-shadow: ${(props) => props.theme.shadow.lg};

  img {
    width: clamp(15rem, 70vw, 45rem);
    height: 100%;
    object-fit: cover;
    border-radius: ${(props) => props.theme.rounded.base};
  }

  @media (max-width: 450px) {
    img {
      display: none;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  alignt-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.md};
  flex-wrap: wrap;
`;
