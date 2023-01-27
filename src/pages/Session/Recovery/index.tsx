import { useContext, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { Button } from '../../../components/Button';
import { InputField } from '../../../components/InputField';
import { SessionContainer } from '../../../layouts/SessionDefaultLayout/components/SessionContainer';
import { ContentContainer } from '../../../layouts/SessionDefaultLayout/components/SessionContainer/styles';
import { toast } from 'react-toastify';
import { recognizerApi } from '../../../services/axios/instances';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

export const Recovery = () => {
  const navigate = useNavigate();
  const { authenticated } = useContext(AuthContext);

  const RecoveryFormSchema = zod
    .object({
      code: zod.string(),
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

  useEffect(() => {
    (async () => {
      if (!authenticated) return;

      const {
        data: { sucess, message },
      } = await recognizerApi.get('/user/verification-code');

      if (sucess) {
        toast.info(sucess);
      } else {
        toast.error(
          message || 'Ops, algum erro aconteceu! Tente novamente mais tarde.'
        );
      }
    })();
  }, []);

  const handleRecoverySubmit = async ({
    code,
    password,
    newPassword,
  }: RecoveryFormFormData) => {
    const url = authenticated ? '/user/recovery' : '/user/recovery-logged-out';

    const {
      data: { sucess, message },
    } = await recognizerApi.patch(url, {
      code,
      password,
    });

    if (sucess) {
      toast.info(sucess);

      if (!authenticated) navigate('/sessao/acessar');
      else navigate('/perfil');
    } else {
      toast.error(
        message || 'Ops, algum erro aconteceu! Tente novamente mais tarde.'
      );
    }

    reset();
  };

  return (
    <SessionContainer heading="Alterar senha">
      <ContentContainer>
        <form onSubmit={handleSubmit(handleRecoverySubmit)}>
          <InputField
            label="Código de Verificação"
            register={register('code', { required: true })}
            errorMessage={errors.code && errors.code.message}
            type="text"
            placeholder="XXXXXXXXXXXXXXXXXX"
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
