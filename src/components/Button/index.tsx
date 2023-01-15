import { HTMLAttributes } from 'react';
import { ButtonContainer, Icon, Label } from './styles';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  label: string;
  icon?: JSX.Element;
  iconLeft?: boolean;
  variant?: 'primary' | 'secondary' | 'line' | 'icon';
}

export const Button = ({
  type = 'button',
  label,
  icon,
  iconLeft = false,
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <ButtonContainer
      type={type}
      variant={variant}
      iconLeft={iconLeft}
      {...rest}
    >
      {icon && <Icon>{icon}</Icon>}
      <Label>{label}</Label>
    </ButtonContainer>
  );
};
