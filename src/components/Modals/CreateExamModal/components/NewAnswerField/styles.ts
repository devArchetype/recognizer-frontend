import styled from 'styled-components';
import { InputWrapper } from '../../../../base/BaseModal/styles';

export const NewAnswerFieldContainer = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};

  button {
    width: min-content;
  }
`;

export const AnswerInputWrapper = styled(InputWrapper)`
  flex-direction: row;
`;
