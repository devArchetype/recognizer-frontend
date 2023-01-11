import styled from 'styled-components';
import { BasePage } from '../../layouts/BasePage';

export const ExamsPageContainer = styled(BasePage)``;

export const ExamsList = styled.ul`
  display: grid;
  grid-gap: ${(props) => props.theme.spacing.md};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (max-width: 320px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`;

export const DateDetailsContent = styled.div`
  width: 100%;

  h3 {
    color: ${(props) => props.theme.color['base-600']};
    font-weight: ${(props) => props.theme.font.medium};
  }
`;

export const TextareaContent = styled.textarea`
  width: 100%;
  min-height: 5rem;
  resize: vertical;
  overflow-y: scroll;
  padding: ${(props) => props.theme.spacing.xs};
  font-family: 'Ubuntu', sans-serif;
  font-size: ${(props) => props.theme.text.sm};
  color: ${(props) => props.theme.color['base-600']};
  border-radius: ${(props) => props.theme.rounded.base};
  background-color: ${(props) => props.theme.color['base-light']};
  border: 1px solid ${(props) => props.theme.color['base-200']};
`;
