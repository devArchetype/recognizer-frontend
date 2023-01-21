import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as zod from 'zod';
import { Button } from '../../../components/Button';
import { InputField } from '../../../components/InputField';
import { Switch } from '../../../components/Switch';
import { AuthContext } from '../../../contexts/AuthContext';
import { PreferencesContext } from '../../../contexts/PreferencesContext';
import { SessionContainer } from '../../../layouts/SessionDefaultLayout/components/SessionContainer';
import {
  ContentContainer,
  Footer,
} from '../../../layouts/SessionDefaultLayout/components/SessionContainer/styles';

export const Login = () => {
  const { login } = useContext(AuthContext);
  const { themeName } = useContext(PreferencesContext);

  // const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const LoginFormSchema = zod.object({
    email: zod.string().email({ message: 'Formato de email inválido!' }),
    password: zod
      .string()
      .min(8, { message: 'A senha deve ter no mínimo 8 caracteres!' }),
    keepSession: zod.boolean(),
  });

  type LoginFormFormData = zod.infer<typeof LoginFormSchema>;

  const LoginForm = useForm<LoginFormFormData>({
    resolver: zodResolver(LoginFormSchema),
  });

  const { formState, register, handleSubmit, reset } = LoginForm;
  const { errors } = formState;

  const handleLoginSubmit = ({ email, password }: LoginFormFormData) => {
    login({ email, password });
  };

  return (
    <SessionContainer heading="Seja bem vindo!">
      <ContentContainer>
        <form onSubmit={handleSubmit(handleLoginSubmit)} id="loginForm">
          <InputField
            label="Email"
            register={register('email', { required: true })}
            errorMessage={errors.email && errors.email.message}
            placeholder="exemplo@recognizer.com"
            border
            name="email"
          />
          <InputField
            label="Senha"
            register={register('password', { required: true })}
            errorMessage={errors.password && errors.password.message}
            type="password"
            passwordButton
            border
            name="password"
          />
          <Switch
            label="Continuar conectado?"
            srLabel={false}
            leftLabel
            register={register('keepSession')}
          />
          {/* <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_KEY}
            theme={themeName}
            type="image"
          /> */}
          <Button label="Acessar" type="submit" />
        </form>

        <Footer>
          <div>Não possui cadastro?</div>
          <Link to="/sessao/cadastrar">Cadastre-se</Link>
        </Footer>
      </ContentContainer>
    </SessionContainer>
  );
};
