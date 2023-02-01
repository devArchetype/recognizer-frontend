import { Warning } from 'phosphor-react';
import { HTMLAttributes, MouseEvent, useState } from 'react';
import { ButtonContainer, Icon, Label } from './styles';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  label?: string;
  title?: string;
  srLabel?: boolean;
  icon?: JSX.Element;
  iconLeft?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'line' | 'icon';
  form?: string | undefined;
  confirm?: boolean;
  confirmMessage?: string;
  confirmIcon?: JSX.Element;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void | undefined;
}

export const Button = ({
  type = 'button',
  label = undefined,
  icon,
  title = '',
  srLabel = false,
  iconLeft = false,
  variant = 'primary',
  form = undefined,
  confirm,
  confirmMessage = 'Confirmar?',
  confirmIcon = <Warning />,
  onClick,
  ...rest
}: ButtonProps) => {
  const [confirmStep, setConfirmStep] = useState(0);

  const displayLabel = confirmStep === 1 ? confirmMessage : label;
  const displayIcon = icon && confirmStep === 1 ? confirmIcon : icon;
  const displayTitle = confirmStep === 1 ? confirmMessage : title;

  const handleOnDefaultClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(event);
  };

  const handleOnConfirmClick = (event: MouseEvent<HTMLButtonElement>) => {
    setConfirmStep((prevState) => prevState + 1);

    const resetTimeout = setTimeout(() => {
      setConfirmStep(0);
    }, 3000);

    if (confirmStep === 1) {
      clearTimeout(resetTimeout);

      handleOnDefaultClick(event);
      setConfirmStep(0);
    }
  };

  return (
    <ButtonContainer
      type={type}
      variant={variant}
      iconLeft={iconLeft}
      form={form}
      title={displayTitle}
      onClick={
        confirm
          ? handleOnConfirmClick
          : onClick
          ? handleOnDefaultClick
          : undefined
      }
      {...rest}
    >
      <Icon>{displayIcon}</Icon>
      {label && <Label srLabel={srLabel}>{displayLabel}</Label>}
    </ButtonContainer>
  );
};
