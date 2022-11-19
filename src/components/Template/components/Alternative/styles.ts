import styled from 'styled-components';

export const AltWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 12.8rem;
`;

export const AltList = styled.li``;

export const AltLabel = styled.label`
  cursor: default;
  user-select: none;
  color: ${(props) => props.theme.color['brand-600']};
  font-size: 1rem;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  border: 1.5px ${(props) => props.theme.color['brand-500']} solid;
  transition: 200ms;
`;

interface AltInputProps {
  isRight: boolean;
  correctOption: boolean;
}

export const AltInput =
  styled.input <
  AltInputProps >
  `
  appearance: none;
  display: none;

  + ${AltLabel} {
    color: ${(props) => {
      if (props.correctOption) return props.theme.color['base-200'];
    }};
    background-color: ${(props) => {
      if (props.correctOption) return props.theme.color['brand-500'];
    }};
  }

  &:checked + ${AltLabel} {
    color: ${(props) => props.theme.color['base-200']};
    background-color: ${(props) => {
      if (props.isRight) return props.theme.color['success-base'];
      return props.theme.color['danger-dark'];
    }};
    border-color: ${(props) => {
      if (props.isRight) return props.theme.color['success-base'];
      return props.theme.color['danger-dark'];
    }};
  }
`;
