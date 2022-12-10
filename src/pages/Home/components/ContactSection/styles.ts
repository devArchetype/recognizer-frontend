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
  gap: ${(props) => props.theme.spacing.xxl};
  overflow-y: hidden;
`;

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.lg};

  h1,
  p {
    width: clamp(15rem, 70vw, 35rem);
    text-align: center;
  }

  h1 {
    font-size: ${(props) => props.theme.text.xxl};
    font-weight: ${(props) => props.theme.font.bold};
    color: ${(props) => props.theme.color['base-dark']};
    line-height: 2rem;
    text-shadow: 0.5px 0.5px 1px #000000;
  }
`;

export const SectionContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
`;

export const FormContact = styled.form`
  height: 100%;
  width: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};

  input,
  textarea {
    width: 100%;
    padding: ${(props) => props.theme.spacing.xs};
    border: 1px solid ${(props) => props.theme.color['base-400']};
    border-radius: ${(props) => props.theme.rounded.base};
  }

  textarea {
    height: 48%;
    min-height: 10rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${(props) => props.theme.spacing.sm};
    width: 100%;
  }

  @media (max-width: 880px) {
    width: 80%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  img {
    ob
    width: 100%;
    height: 100%;
    border-radius: ${(props) => props.theme.rounded.base};
  }

  @media (max-width: 880px) {
    display: none;
  }
`;
