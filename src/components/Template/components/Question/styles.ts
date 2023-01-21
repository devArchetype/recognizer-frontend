import styled from 'styled-components';

export const QuestionContainer = styled.div`
  position: relative;
  cursor: default;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.sm};
  flex-wrap: wrap;
  overflow: hidden;
  padding: ${(props) => props.theme.spacing.xs};
  border-radius: ${(props) => props.theme.rounded.base};
  box-shadow: ${(props) => props.theme.shadow.base};
  background-color: ${(props) => props.theme.color['base-light']};

  &:before {
    content: '';
    width: 3%;
    position: absolute;
    inset: 0 auto 0 0;
    background-color: ${(props) => props.theme.color['brand-500']};
  }
`;

export const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5%;
`;

export const NumberText = styled.span`
  font-size: ${(props) => props.theme.text.md};
  color: ${(props) => props.theme.color['base-400']};
  font-weight: ${(props) => props.theme.font.medium};
`;

export const NumberTextShort = styled.span`
  display: none;
`;

export const NumberInput = styled.input`
  font-size: ${(props) => props.theme.text.md};
  color: ${(props) => props.theme.color['base-400']};
  width: 3.2rem;

  &:invalid {
    box-shadow: none;
    color: red;
  }
`;
