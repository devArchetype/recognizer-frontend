import * as ToggleGroup from '@radix-ui/react-toggle-group';
import styled from 'styled-components';

export const ToggleGroupContainer = styled(ToggleGroup.Root)`
  display: flex;
  gap: ${(props) => props.theme.spacing.xs};
  position: relative;
  height: min-content;
`;

export const ToggleGroupItem = styled(ToggleGroup.Item)`
  padding: ${(props) => props.theme.spacing.xs};
  font-size: ${(props) => props.theme.text.md};
  color: ${(props) => props.theme.color['base-800']};
  text-transform: uppercase;
  cursor: pointer;
  border: solid 1px ${(props) => props.theme.color['brand-600']};
  border-radius: ${(props) => props.theme.rounded.base};

  &[data-state='on'] {
    color: ${(props) => props.theme.color['base-50']};
    background-color: ${(props) => props.theme.color['brand-500']};
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  font-size: ${(props) => props.theme.text.sm};
  line-height: 100%;
  color: ${(props) => props.theme.color['danger-dark']};
  top: calc(100% + 2px);
`;
