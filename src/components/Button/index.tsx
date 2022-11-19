import { HTMLAttributes } from 'react';
import { ButtonContainer, Icon, Label } from './styles';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: JSX.Element;
  iconLeft?: boolean;
  variant?: 'primary' | 'secondary' | 'line' | 'icon';
}

export const Button = ({
  label,
  icon,
  iconLeft = false,
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <ButtonContainer iconLeft={iconLeft} variant={variant} {...rest}>
      {icon && <Icon>{icon}</Icon>}
      <Label>{label}</Label>
    </ButtonContainer>
  );
};
