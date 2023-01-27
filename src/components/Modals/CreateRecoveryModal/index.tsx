import { zodResolver } from '@hookform/resolvers/zod';
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { InputField } from '../../InputField';
import { BaseModal, ModalProps } from '../../base/BaseModal';
import { ModalFormContainer } from '../../base/BaseModal/styles';
import { Info } from 'phosphor-react';
import { toast } from 'react-toastify';
import { recognizerApi } from '../../../services/axios/instances';
import { useNavigate } from 'react-router-dom';

export const CreateRecoveryModal = ({ handleModalDisplay }: ModalProps) => {
  const navigate = useNavigate();
  const CreateRecoverySchema = zod.object({
    email: zod.string().email({ message: 'Formato de email inválido!' }),
  });

  type CreateRecoveryFormData = zod.infer<typeof CreateRecoverySchema>;

  const LoginForm = useForm<CreateRecoveryFormData>({
    resolver: zodResolver(CreateRecoverySchema),
  });

  const { formState, register, handleSubmit, reset } = LoginForm;
  const { errors } = formState;
  const CREATE_MODAL_FORM_ID = useId();

  const handleClearForm = () => {
    reset();
    handleModalDisplay!();
  };

  const handleCreateFormSubmit = async ({ email }: CreateRecoveryFormData) => {
    const {
      data: { sucess, message },
    } = await recognizerApi.post('/user/recovery-password', { email });

    if (sucess) {
      toast.info(sucess);
      navigate('/sessao/recuperar');
    } else {
      toast.error(
        message || 'Ops, algum erro aconteceu! Tente novamente mais tarde.'
      );
    }
  };

  return (
    <BaseModal
      heading="Recuperar Senha"
      formId={CREATE_MODAL_FORM_ID}
      onCancel={handleClearForm}
    >
      <h1>Informe o Email da sua conta</h1>
      <ModalFormContainer>
        <form
          id={CREATE_MODAL_FORM_ID}
          onSubmit={handleSubmit(handleCreateFormSubmit)}
        >
          <InputField
            label="Email"
            register={register('email', { required: true })}
            errorMessage={errors.email && errors.email.message}
          />
        </form>

        <div className="infor-content">
          <p>
            <Info size={23} />
            &nbsp; Assim que cliclar em &apos;enviar&apos;, um código de
            verificação será enviado para o seu email.
          </p>
          <p>
            <Info size={23} />
            &nbsp; Use o código para alterar a sua senha a seguir.
          </p>
        </div>
      </ModalFormContainer>
    </BaseModal>
  );
};
