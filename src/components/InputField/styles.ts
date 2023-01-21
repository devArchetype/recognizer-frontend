import styled from 'styled-components';
import { SrOnly } from '../../styles/utils';
import { Button } from '../Button';

interface LabelProps {
  srLabel: boolean;
}

interface WrapperProps {
  hasError: boolean;
  border: boolean;
}

interface ContainerProps {
  full: boolean;
}

export const InputFieldContainer = styled.label<ContainerProps>`
  width: ${(props) => (props.full ? '100%' : 'auto')};
  position: relative;
  z-index: 1;
`;

export const Wrapper = styled.div<WrapperProps>`
  height: calc(${(props) => props.theme.spacing.lg} + 8px);
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  cursor: text;
  overflow: hidden;
  font-size: ${(props) => props.theme.text.xl};
  border-radius: ${(props) => props.theme.rounded.base};
  background-color: ${(props) => props.theme.color['base-light']};
  box-shadow: ${(props) =>
    props.hasError && `0 0 0 1px ${props.theme.color['danger-dark']}`};
  border: 1px solid
    ${(props) =>
    props.border ? `${props.theme.color['base-400']}` : 'transparent'};
  border-color: ${(props) =>
    props.hasError && props.theme.color['danger-dark']};

  svg {
    color: ${(props) => props.theme.color['base-400']};
  }

  &:focus-within {
    box-shadow: 0 0 0 1px ${(props) => props.theme.color['brand-600']};

    svg {
      color: ${(props) => props.theme.color['brand-600']};
    }
  }

  input {
    all: unset;
    width: 100%;
    position: relative;
    padding: ${(props) => props.theme.spacing.xs};
    font-size: ${(props) => props.theme.text.md};
    color: ${(props) => props.theme.color['base-900']};

    &::placeholder {
      color: ${(props) => props.theme.color['base-400']};
    }
  }
`;

export const Label = styled.span<LabelProps>`
  ${(props) => props.srLabel && SrOnly};

  display: block;
  margin: ${({ theme }) => `0 0 ${theme.spacing.xxs} ${theme.spacing.xxs}`};
  font-weight: ${(props) => props.theme.font.medium};
  color: ${(props) => props.theme.color['base-600']};
`;

export const PasswordButton = styled(Button)`
  position: relative;
  right: ${(props) => props.theme.spacing.xs};
`;

export const ErrorMessage = styled.span`
  position: absolute;
  font-size: ${(props) => props.theme.text.sm};
  line-height: 100%;
  color: ${(props) => props.theme.color['danger-dark']};
  margin-top: 2px;
`;
