import { TextareaHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { ErrorMessage, Label, TextareaFieldContainer, Wrapper } from './styles';

interface TextareaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  srLabel?: boolean;
  icon?: JSX.Element;
  errorMessage?: string;
  border?: boolean;
  full?: boolean;
  register?: UseFormRegisterReturn<string>;
}

export const TextareaField = ({
  label,
  srLabel = false,
  icon,
  errorMessage,
  border = false,
  full = false,
  register,
  ...rest
}: TextareaFieldProps) => {
  const hasError = !!errorMessage;
  const hasIcon = !!icon;

  return (
    <TextareaFieldContainer full={full}>
      <Label srLabel={srLabel}>{label}</Label>
      <Wrapper hasError={hasError} hasIcon={hasIcon} border={border}>
        {icon}
        <textarea {...register} {...rest} />
      </Wrapper>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </TextareaFieldContainer>
  );
};
