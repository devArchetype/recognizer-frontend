import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as zod from 'zod';
import { Button } from '../../../components/Button';
import { InputField } from '../../../components/InputField';
import { SessionContainer } from '../../../layouts/SessionDefaultLayout/components/SessionContainer';
import {
  ContentContainer,
  Footer,
} from '../../../layouts/SessionDefaultLayout/components/SessionContainer/styles';

export const Login = () => {
  const LoginFormSchema = zod.object({
    email: zod.string().email({ message: 'Formato de email inválido!' }),
    password: zod
      .string()
      .min(8, { message: 'A senha deve ter no mínimo 8 caracteres!' }),
  });

  type LoginFormFormData = zod.infer<typeof LoginFormSchema>;

  const LoginForm = useForm<LoginFormFormData>({
    resolver: zodResolver(LoginFormSchema),
  });

  const { formState, register, handleSubmit, reset } = LoginForm;
  const { errors } = formState;

  const handleLoginSubmit = ({ email, password }: LoginFormFormData) => {
    reset();

    toast.info('bnvasuisdbvuiads');
  };

  return (
    <SessionContainer heading="Seja bem vindo!">
      <ContentContainer>
        <form onSubmit={handleSubmit(handleLoginSubmit)}>
          <InputField
            label="Email"
            register={register('email', { required: true })}
            errorMessage={errors.email && errors.email.message}
            placeholder="exemplo@recognizer.com"
            border
          />
          <InputField
            label="Senha"
            register={register('password', { required: true })}
            errorMessage={errors.password && errors.password.message}
            type="password"
            border
          />

          <Button label="Acessar" type="submit" />
        </form>

        <Footer>
          <div>Não possui cadastro?</div>
          <Link to="/session/registration">Cadastre-se</Link>
        </Footer>
      </ContentContainer>
    </SessionContainer>
  );
};
