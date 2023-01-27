import styled from 'styled-components';

export const NewMembersList = styled.ul`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
  padding: ${(props) => props.theme.spacing.xxs};
`;

export const NewMemberListLimiter = styled.div`
  flex: 1;
  max-height: 400px;
  overflow-y: auto;
`;
