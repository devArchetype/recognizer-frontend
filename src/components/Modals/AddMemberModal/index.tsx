import { zodResolver } from '@hookform/resolvers/zod';
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { InputField } from '../../InputField';
import { BaseModal, ModalProps } from '../../base/BaseModal';
import { ModalFormContainer } from '../../base/BaseModal/styles';

export const AddMemberModal = ({ handleModalDisplay }: ModalProps) => {
  const AddMemberSchema = zod.object({
    name: zod.string().min(3, { message: 'Insira um nome válido!' }),
    memberId: zod.string(),
  });

  type AddMemberFormData = zod.infer<typeof AddMemberSchema>;

  const form = useForm<AddMemberFormData>({
    resolver: zodResolver(AddMemberSchema),
  });

  const { formState, register, handleSubmit, reset } = form;
  const { errors } = formState;
  const ADD_MEMBER_FORM_ID = useId();

  const handleClearForm = () => {
    reset();
    handleModalDisplay!();
  };

  const handleAddFormSubmit = (data: AddMemberFormData) => {
    console.log(data);
    handleClearForm();
  };

  return (
    <BaseModal
      heading="Adicionar novo membro"
      formId={ADD_MEMBER_FORM_ID}
      onCancel={handleClearForm}
    >
      <ModalFormContainer>
        <form
          id={ADD_MEMBER_FORM_ID}
          onSubmit={handleSubmit(handleAddFormSubmit)}
        >
          <InputField
            label="Nome do membro"
            name="name"
            register={register('name', { required: true })}
            errorMessage={errors.name && errors.name.message}
          />
          <InputField
            label="Matrícula"
            name="memberId"
            register={register('memberId', { required: true })}
          />
        </form>
      </ModalFormContainer>
    </BaseModal>
  );
};
