import styled from 'styled-components';

export const TemplateSection = styled.section`
  scrollbar-width: thin;
  user-select: none;
  display: grid;
  grid-gap: ${(props) => props.theme.spacing.sm};
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
