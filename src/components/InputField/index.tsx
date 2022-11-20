import { InputHTMLAttributes } from 'react';
import { ErrorMessage, InputFieldContainer, Label, Wrapper } from './styles';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  label: string;
  srLabel?: boolean;
  icon?: JSX.Element;
  errorMessage?: string;
}

export const InputField = ({
  type = 'text',
  label,
  srLabel = false,
  errorMessage,
  icon,
  ...rest
}: InputFieldProps) => {
  const hasError = Boolean(errorMessage);

  return (
    <InputFieldContainer>
      <Label srLabel={srLabel}>{label}</Label>
      <Wrapper hasError={hasError}>
        {icon}
        <input type={type} {...rest} />
      </Wrapper>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputFieldContainer>
  );
};
