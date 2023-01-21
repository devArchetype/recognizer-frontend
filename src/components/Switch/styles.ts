import styled from 'styled-components';
import { SrOnly } from '../../styles/utils';

interface SwitchContainerProps {
  srLabel: boolean;
  leftLabel: boolean;
}

export const SwitchContainer = styled.label<SwitchContainerProps>`
  width: min-content;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.leftLabel ? 'row-reverse' : 'row')};
  gap: ${(props) => props.theme.spacing.xs};

  span {
    white-space: nowrap;
    ${(props) => props.srLabel && SrOnly};
  }
`;

export const Checkbox = styled.input`
  ${SrOnly}

  &:checked + div {
    border-color: ${(props) => props.theme.color['brand-600']};
    background-color: ${(props) => props.theme.color['brand-600']};

    &::after {
      transform: translateX(100%);
    }
  }

  &:disabled + div {
    cursor: not-allowed;
    border-color: ${(props) => props.theme.color['base-300']};
    background-color: ${(props) => props.theme.color['base-300']};

    &::after {
      background-color: ${(props) => props.theme.color['base-300']};
    }
  }

  &:focus + div {
    outline: transparent;
    overflow: hidden;
    box-shadow: 0 0 0 1px ${(props) => props.theme.color['brand-600']};
  }
`;

export const Label = styled.div`
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
    background-color: ${(props) => props.theme.color['base-100']};
  }
`;
