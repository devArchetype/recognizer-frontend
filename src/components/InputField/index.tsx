import { Eye, EyeSlash } from 'phosphor-react';
import { InputHTMLAttributes, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import {
  ErrorMessage,
  InputFieldContainer,
  Label,
  PasswordButton,
  Wrapper,
} from './styles';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  label: string;
  srLabel?: boolean;
  icon?: JSX.Element;
  passwordButton?: boolean;
  errorMessage?: string;
  border?: boolean;
  full?: boolean;
  register?: UseFormRegisterReturn<string>;
}

export const InputField = ({
  type = 'text',
  label,
  srLabel = false,
  passwordButton = false,
  errorMessage,
  icon,
  border = false,
  full = false,
  register,
  ...rest
}: InputFieldProps) => {
  const [displayPassword, setDisplayPassword] = useState(false);

  const hasPasswordButton = passwordButton && type === 'password';
  const hasError = !!errorMessage;
  const hasIcon = !!icon;

  const passwordInputType = hasPasswordButton
    ? displayPassword
      ? 'text'
      : 'password'
    : type;

  const handleDisplayPassword = () => {
    setDisplayPassword((prevState) => !prevState);
  };

  return (
    <>
      {type === 'hidden' ? (
        <input type={passwordInputType} {...register} {...rest} />
      ) : (
        <InputFieldContainer full={full}>
          <Label srLabel={srLabel}>{label}</Label>
          <Wrapper hasError={hasError} hasIcon={hasIcon} border={border}>
            {icon}
            <input type={passwordInputType} {...register} {...rest} />
            {hasPasswordButton && (
              <PasswordButton
                type="button"
                label={displayPassword ? 'Ocultar senha' : 'Exibir senha'}
                title={displayPassword ? 'Ocultar senha' : 'Exibir senha'}
                icon={displayPassword ? <EyeSlash /> : <Eye />}
                variant="icon"
                onClick={handleDisplayPassword}
              />
            )}
          </Wrapper>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </InputFieldContainer>
      )}
    </>
  );
};
