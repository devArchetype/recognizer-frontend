import styled from 'styled-components';

export const PrintTemplateContainer = styled.article`
  display: none;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.color.black};
  background-color: ${(props) => props.theme.color.white};

  @media print {
    /* height: 100vh; */
    /* max-height: 100vh; */
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.md};
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
  border: 3px solid ${(props) => props.theme.color.black};

  h2 {
    font-weight: ${(props) => props.theme.font.bold};
    font-size: ${(props) => props.theme.text.xxl};
    color: ${(props) => props.theme.color.black};
  }
`;

export const TemplateHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing.md};
  border: 3px solid ${(props) => props.theme.color.black};
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
    border-bottom: 2px solid ${(props) => props.theme.color.black};
  }
`;

export const TemplateBody = styled.div`
  flex: 1;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(15, auto);
  gap: ${(props) => props.theme.spacing.md};
`;

export const QuestionContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};

  strong {
    font-weight: ${(props) => props.theme.font.bold};
    font-size: ${(props) => props.theme.text.xl};
  }
`;

export const QuestionItem = styled.li`
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  text-transform: uppercase;
  border: 2px solid ${(props) => props.theme.color.black};
  border-radius: ${(props) => props.theme.rounded.full};
`;
