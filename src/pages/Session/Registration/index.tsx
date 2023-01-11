import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as zod from 'zod';
import { Button } from '../../../components/Button';
import { InputField } from '../../../components/InputField';
import { SessionContainer } from '../../../layouts/SessionDefaultLayout/components/SessionContainer';
import {
  ContentContainer,
  Footer,
} from '../../../layouts/SessionDefaultLayout/components/SessionContainer/styles';

export const Registration = () => {
  const RegistrationFormSchema = zod
    .object({
      name: zod.string().min(3, { message: 'Insira um nome válido!' }),
      email: zod.string().email({ message: 'Insira um email válido!' }),
      password: zod
        .string()
        .min(8, { message: 'A senha deve ter no mínimo 8 caracteres!' }),
      confirmPassword: zod
        .string()
        .min(8, { message: 'A senha deve ter no mínimo 8 caracteres!' }),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      path: ['confirmPassword'],
      message: "Password don't match",
    });

  type RegistrationFormFormData = zod.infer<typeof RegistrationFormSchema>;

  const RegistrationForm = useForm<RegistrationFormFormData>({
    resolver: zodResolver(RegistrationFormSchema),
  });

  const { formState, register, handleSubmit, reset } = RegistrationForm;
  const { errors } = formState;

  const handleRegistrationSubmit = ({
    name,
    email,
    password,
    confirmPassword,
  }: RegistrationFormFormData) => {
    reset();
  };

  return (
    <SessionContainer heading="Cadastre-se!">
      <ContentContainer>
        <form onSubmit={handleSubmit(handleRegistrationSubmit)}>
          <InputField
            label="Nome"
            register={register('name', { required: true })}
            errorMessage={errors.name && errors.name.message}
            border
          />
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
          <InputField
            label="Confirmar senha"
            register={register('confirmPassword', { required: true })}
            errorMessage={
              errors.confirmPassword && errors.confirmPassword.message
            }
            type="password"
            border
          />

          <Button label="Cadastrar" type="submit" />
        </form>
        <Footer>
          <div>Já possui cadastro?</div>
          <Link to="/session/login">Acessar</Link>
        </Footer>
      </ContentContainer>
    </SessionContainer>
  );
};
