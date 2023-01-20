import styled from 'styled-components';

export const PrintTemplateContainer = styled.article`
  min-height: 100vh;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.color['base-dark']};
  background-color: ${(props) => props.theme.color['base-light']};

  @media print, ${(props) => props.theme.screen.md} {
    /* height: 100vh; */
    /* max-height: 100vh; */
    width: 100vw;
    background-color: transparent;
  }
`;

export const AIContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${(props) => props.theme.spacing.lg};
  padding: ${(props) => props.theme.spacing.md};
  border: 3px solid ${(props) => props.theme.color['base-dark']};

  h2 {
    font-weight: ${(props) => props.theme.font.bold};
    font-size: ${(props) => props.theme.text.xxl};
    color: ${(props) => props.theme.color['base-dark']};
  }
`;

export const TemplateHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing.md};
  border: 3px solid ${(props) => props.theme.color['base-dark']};
`;

export const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h2 {
    font-weight: ${(props) => props.theme.font.bold};
    font-size: ${(props) => props.theme.text.xxl};
  }

  strong {
    font-weight: ${(props) => props.theme.font.medium};
    font-size: ${(props) => props.theme.text.md};
  }

  div {
    width: 100%;
    border-bottom: 2px solid ${(props) => props.theme.color['base-dark']};
  }
`;

export const TemplateBody = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  gap: ${(props) => props.theme.spacing.md};
  flex: 1;

  @media print, ${(props) => props.theme.screen.md} {
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(15, auto);
  }
`;

export const QuestionContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
  flex-wrap: wrap;

  strong {
    font-weight: ${(props) => props.theme.font.bold};
    font-size: ${(props) => props.theme.text.xl};
  }

  @media print, ${(props) => props.theme.screen.md} {
    flex-wrap: nowrap;
  }
`;

export const QuestionItem = styled.li`
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  text-transform: uppercase;
  border: 2px solid ${(props) => props.theme.color['base-dark']};
  border-radius: ${(props) => props.theme.rounded.full};
`;
