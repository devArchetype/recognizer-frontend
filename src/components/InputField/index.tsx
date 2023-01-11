import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { ErrorMessage, InputFieldContainer, Label, Wrapper } from './styles';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  label: string;
  srLabel?: boolean;
  icon?: JSX.Element;
  errorMessage?: string;
  border?: boolean;
  register?: UseFormRegisterReturn<string>;
}

export const InputField = ({
  type = 'text',
  label,
  srLabel = false,
  errorMessage,
  icon,
  border = false,
  register,
  ...rest
}: InputFieldProps) => {
  const hasError = Boolean(errorMessage);

  return (
    <InputFieldContainer>
      <Label srLabel={srLabel}>{label}</Label>
      <Wrapper hasError={hasError} border={border}>
        {icon}
        <input type={type} {...register} {...rest} />
      </Wrapper>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputFieldContainer>
  );
};
