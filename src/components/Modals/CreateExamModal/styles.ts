import styled from 'styled-components';

export const NewAnswersList = styled.ul`
  min-height: 200px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto, 1fr);
  grid-template-rows: repeat(10, auto);
  gap: ${(props) => props.theme.spacing.md};
  padding: ${(props) => props.theme.spacing.xxs};
`;

export const NewAnswersListLimiter = styled.div`
  flex: 1;
  max-height: 400px;
  overflow-y: auto;
`;
