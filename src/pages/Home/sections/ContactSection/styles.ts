import styled from 'styled-components';

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
