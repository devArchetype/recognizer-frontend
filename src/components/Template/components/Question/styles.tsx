import styled from 'styled-components';

export const QuestionContainer = styled.div`
  position: relative;
  cursor: default;
  width: 100%;
  padding: 0.8rem 1rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.sm};
  flex-wrap: wrap;
  border: 1px solid ${(props) => props.theme.color['brand-500']};
  border-radius: 0.6rem;

  &:before {
    content: '';
    width: 4%;
    position: absolute;
    top: 0;
    bottom: -1px;
    left: 0;
    background-color: ${(props) => props.theme.color['brand-500']};
    border-radius: 0.5rem 0 0 0.6rem;
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
