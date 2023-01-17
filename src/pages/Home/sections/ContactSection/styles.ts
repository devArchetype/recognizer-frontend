import styled from 'styled-components';

export const SectionContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
`;

export const ContactFormContainer = styled.form`
  height: 100%;
  width: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing.lg};
`;

export const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    border-radius: ${(props) => props.theme.rounded.base};
  }

  @media (max-width: 880px) {
    display: none;
  }
`;
