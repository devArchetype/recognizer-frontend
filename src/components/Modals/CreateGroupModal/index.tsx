import { zodResolver } from '@hookform/resolvers/zod';
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { createGroup } from '../../../services/axios/requests/groups';
import { InputField } from '../../InputField';
import { BaseModal, ModalProps } from '../../base/BaseModal';
import { ModalFormContainer } from '../../base/BaseModal/styles';

export const CreateGroupModal = ({
  handleModalDisplay,
  reload,
}: ModalProps) => {
  const CreateGroupSchema = zod.object({
    name: zod.string().min(3, { message: 'Insira um nome válido!' }),
  });

  type CreateGroupFormData = zod.infer<typeof CreateGroupSchema>;

  const LoginForm = useForm<CreateGroupFormData>({
    resolver: zodResolver(CreateGroupSchema),
  });

  const { formState, register, handleSubmit, reset } = LoginForm;
  const { errors } = formState;
  const CREATE_GROUP_FORM_ID = useId();

  const handleClearForm = () => {
    reset();
    handleModalDisplay!();
  };

  const handleCreateFormSubmit = async ({ name }: CreateGroupFormData) => {
    await createGroup(name);
    reload && reload();
    handleClearForm();
  };

  return (
    <BaseModal
      heading="Criar novo grupo"
      formId={CREATE_GROUP_FORM_ID}
      onCancel={handleClearForm}
    >
      <ModalFormContainer>
        <form
          id={CREATE_GROUP_FORM_ID}
          onSubmit={handleSubmit(handleCreateFormSubmit)}
        >
          <InputField
            label="Nome do grupo"
            register={register('name', { required: true })}
            errorMessage={errors.name && errors.name.message}
          />
        </form>
      </ModalFormContainer>
    </BaseModal>
  );
};
