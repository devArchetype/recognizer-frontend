import autoAnimate from '@formkit/auto-animate';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useId, useRef } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { BaseModal, ModalProps } from '../../base/BaseModal';
import { ModalFormContainer } from '../../base/BaseModal/styles';
import { NewMemberField } from './components/NewMemberField';
import { NewMemberListLimiter, NewMembersList } from './styles';

export const AddMemberModal = ({ handleModalDisplay }: ModalProps) => {
  const AddMemberSchema = zod.object({
    newMembers: zod
      .object({
        name: zod.string().min(3, { message: 'Insira um nome válido!' }),
        externalId: zod.string(),
      })
      .array()
      .min(1, `Você deve adicionar pelo menos 1 membro`),
  });

  type AddMemberFormData = zod.infer<typeof AddMemberSchema>;

  const LoginForm = useForm<AddMemberFormData>({
    resolver: zodResolver(AddMemberSchema),
    defaultValues: {
      newMembers: [{ name: '', externalId: '' }],
    },
  });

  const { formState, control, register, handleSubmit, reset } = LoginForm;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'newMembers',
  });

  const newMembersAmount = fields.length;
  const { errors } = formState;
  const ADD_MEMBER_FORM_ID = useId();

  const membersListRef = useRef(null);

  useEffect(() => {
    membersListRef.current && autoAnimate(membersListRef.current);
  }, [membersListRef]);

  const handleClearForm = () => {
    reset();
    handleModalDisplay!();
  };

  const handleCreateFormSubmit = ({ newMembers }: AddMemberFormData) => {
    console.log(newMembers);
    handleClearForm();
  };

  return (
    <BaseModal
      heading="Adicionar novos membros"
      formId={ADD_MEMBER_FORM_ID}
      onCancel={handleClearForm}
    >
      <ModalFormContainer>
        <form
          id={ADD_MEMBER_FORM_ID}
          onSubmit={handleSubmit(handleCreateFormSubmit)}
        >
          <NewMemberListLimiter>
            <NewMembersList ref={membersListRef}>
              {fields.map(({ id }, index) => {
                const isLast = index === newMembersAmount - 1;

                return (
                  <NewMemberField
                    key={id}
                    index={index}
                    isLast={isLast}
                    errors={errors}
                    add={append}
                    remove={remove}
                    register={register}
                  />
                );
              })}
            </NewMembersList>
          </NewMemberListLimiter>
        </form>
      </ModalFormContainer>
    </BaseModal>
  );
};
