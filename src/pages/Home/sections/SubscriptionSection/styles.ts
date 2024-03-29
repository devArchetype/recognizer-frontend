import styled from 'styled-components';

export const SectionContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
`;

export const CardsListContainer = styled.ul`
  display: flex;
  align-items: start;
  justify-content: stretch;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.lg};
`;
