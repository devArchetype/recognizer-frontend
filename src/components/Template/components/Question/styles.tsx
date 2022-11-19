import styled from 'styled-components';

export const QuestionContainer = styled.div`
  position: relative;
  cursor: default;
  width: 100%;
  padding: 0.8rem 1rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  border-radius: ${(props) => props.theme.rounded.base};

  &:before {
    content: '';
    width: 4%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.color['brand-500']};
    border-radius: ${(props) => props.theme.rounded.base} 0 0
      ${(props) => props.theme.rounded.base};
  }
`;

export const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5%;
`;

export const NumberText = styled.span`
  font-size: 1rem;
`;

export const NumberTextShort = styled.span`
  display: none;
`;

export const NumberInput = styled.input`
  font-size: 1rem;
  color: blue;
  width: 3.2rem;

  &:invalid {
    box-shadow: none;
    color: red;
  }
`;
