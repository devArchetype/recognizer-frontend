import styled from 'styled-components';

export const NewMemberFieldContainer = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};

  button {
    width: min-content;
  }
`;
