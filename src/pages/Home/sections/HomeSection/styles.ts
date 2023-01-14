import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: ${`${window.innerHeight}px`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xl};
  overflow-y: hidden;
  /* background-image: url('/images/bg.svg');
  background-repeat: no-repeat;
  background-size: cover; */
`;

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};

  h1,
  p {
    width: clamp(15rem, 70vw, 35rem);
    text-align: center;
  }

  h1 {
    font-size: ${(props) => props.theme.text.xxl};
    font-weight: ${(props) => props.theme.font.bold};
    color: ${(props) => props.theme.color['base-900']};
    line-height: 2rem;
    text-shadow: ${(props) => props.theme.shadow.lg};
  }
`;

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
