import { HTMLAttributes } from 'react';
import { ButtonContainer, Icon, Label } from './styles';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  label: string;
  srLabel?: boolean;
  icon?: JSX.Element;
  iconLeft?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'line' | 'icon';
  form?: string;
}

export const Button = ({
  type = 'button',
  label,
  srLabel = false,
  icon,
  iconLeft = false,
  variant = 'primary',
  form = '',
  ...rest
}: ButtonProps) => {
  return (
    <ButtonContainer
      type={type}
      variant={variant}
      iconLeft={iconLeft}
      form={form}
      {...rest}
    >
      {icon && <Icon>{icon}</Icon>}
      <Label srLabel={srLabel}>{label}</Label>
    </ButtonContainer>
  );
};
