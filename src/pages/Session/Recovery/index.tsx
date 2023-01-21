import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { Button } from '../../../components/Button';
import { InputField } from '../../../components/InputField';
import { SessionContainer } from '../../../layouts/SessionDefaultLayout/components/SessionContainer';
import { ContentContainer } from '../../../layouts/SessionDefaultLayout/components/SessionContainer/styles';

export const Recovery = () => {
  const RecoveryFormSchema = zod
    .object({
      email: zod.string().email({ message: 'Formato de email inválido!' }),
      password: zod
        .string()
        .min(8, { message: 'A senha deve ter no mínimo 8 caracteres!' }),
      newPassword: zod
        .string()
        .min(8, { message: 'A senha deve ter no mínimo 8 caracteres!' }),
    })
    .refine(({ password, newPassword }) => password === newPassword, {
      path: ['newPassword'],
      message: 'As senhas não coincidem!',
    });

  type RecoveryFormFormData = zod.infer<typeof RecoveryFormSchema>;

  const RecoveryForm = useForm<RecoveryFormFormData>({
    resolver: zodResolver(RecoveryFormSchema),
  });

  const { formState, register, handleSubmit, reset } = RecoveryForm;
  const { errors } = formState;

  const handleRecoverySubmit = ({
    email,
    password,
    newPassword,
  }: RecoveryFormFormData) => {
    console.log(email, password, newPassword);
    reset();
  };

  return (
    <SessionContainer heading="Alterar senha">
      <ContentContainer>
        <form onSubmit={handleSubmit(handleRecoverySubmit)}>
          <InputField
            label="Email"
            register={register('email', { required: true })}
            errorMessage={errors.email && errors.email.message}
            placeholder="exemplo@recognizer.com"
            border
          />
          <InputField
            label="Nova senha"
            register={register('password', { required: true })}
            errorMessage={errors.password && errors.password.message}
            type="password"
            passwordButton
            border
          />
          <InputField
            label="Confirmar nova senha"
            register={register('newPassword', { required: true })}
            errorMessage={errors.newPassword && errors.newPassword.message}
            type="password"
            passwordButton
            border
          />

          <Button label="Alterar senha" type="submit" />
        </form>
      </ContentContainer>
    </SessionContainer>
  );
};
