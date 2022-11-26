import styled from 'styled-components';
import { SrOnly } from '../../styles/utils';

export const Checkbox = styled.input`
  all: unset;

  &:checked + label {
    border-color: ${(props) => props.theme.color['brand-600']};
    background-color: ${(props) => props.theme.color['brand-600']};

    &::after {
      transform: translateX(100%);
    }
  }

  &:disabled + label {
    cursor: not-allowed;
    border-color: ${(props) => props.theme.color['base-300']};
    background-color: ${(props) => props.theme.color['base-300']};

    &::after {
      background-color: ${(props) => props.theme.color['base-300']};
    }
  }

  &:focus + label {
    outline: transparent;
    overflow: hidden;
    box-shadow: 0 0 0 1px ${(props) => props.theme.color['brand-600']};
  }
`;

export const Label = styled.label`
  width: 2.4rem;
  height: 1.2rem;
  position: relative;
  cursor: pointer;
  border-radius: ${(props) => props.theme.rounded.full};
  border: 2px solid ${(props) => props.theme.color['base-400']};
  background-color: ${(props) => props.theme.color['base-400']};

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 50%;
    transition: all 0.2s ease-in-out;
    box-shadow: ${(props) => props.theme.shadow.base};
    border-radius: ${(props) => props.theme.rounded.full};
    background-color: ${(props) => props.theme.color['base-light']};
  }

  span {
    ${SrOnly}
  }
`;
