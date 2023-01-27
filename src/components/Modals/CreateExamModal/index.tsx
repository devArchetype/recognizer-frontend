import { zodResolver } from '@hookform/resolvers/zod';
import { Article, CalendarPlus, CheckCircle, TextAlignLeft } from 'phosphor-react';
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { InputField } from '../../InputField';
import { TextareaField } from '../../TextareaField';
import { BaseModal, ModalProps } from '../../base/BaseModal';
import { ModalFormContainer } from '../../base/BaseModal/styles';

export const CreateExamModal = ({ handleModalDisplay }: ModalProps) => {
  const CreateExamSchema = zod.object({
    name: zod.string().min(3, { message: 'Insira um nome válido!' }),
    date: zod
      .date({
        errorMap: (issue, { defaultError }) => ({
          message:
            issue.code === 'invalid_date'
              ? 'Insira uma data válida!'
              : defaultError,
        }),
      })
      .min(new Date(), { message: 'A data deve ser posterior a hoje!' }),
    answersAmount: zod
      .number({ invalid_type_error: 'Insira uma quantidade válida!' })
      .min(2, { message: 'Mínimo de 2 alternativas' })
      .max(5, { message: 'Máximo de 5 alternativas' }),
    description: zod.string(),
  });

  type CreateExamFormData = zod.infer<typeof CreateExamSchema>;

  const LoginForm = useForm<CreateExamFormData>({
    resolver: zodResolver(CreateExamSchema),
  });

  const { formState, register, handleSubmit, reset } = LoginForm;
  const { errors } = formState;
  const CREATE_EXAM_FORM_ID = useId();

  const handleClearForm = () => {
    reset();
    handleModalDisplay!();
  };

  const handleCreateFormSubmit = ({ name }: CreateExamFormData) => {
    console.log(name);
    handleClearForm();
  };

  return (
    <BaseModal
      heading="Criar nova prova"
      formId={CREATE_EXAM_FORM_ID}
      onCancel={handleClearForm}
    >
      <ModalFormContainer>
        <form
          id={CREATE_EXAM_FORM_ID}
          onSubmit={handleSubmit(handleCreateFormSubmit)}
        >
          <InputField
            label="Nome da prova"
            icon={<Article />}
            register={register('name', { required: true })}
            errorMessage={errors.name && errors.name.message}
          />
          <InputField
            label="Data"
            type="date"
            icon={<CalendarPlus />}
            register={register('date', { required: false, valueAsDate: true })}
            errorMessage={errors.date && errors.date.message}
          />
          <InputField
            label="Alternativas"
            type="number"
            icon={<CheckCircle />}
            register={register('answersAmount', {
              required: true,
              valueAsNumber: true,
            })}
            errorMessage={errors.answersAmount && errors.answersAmount.message}
          />
          <TextareaField
            label="Descrição"
            icon={<TextAlignLeft />}
            register={register('description')}
            errorMessage={errors.description && errors.description.message}
          />
        </form>
      </ModalFormContainer>
    </BaseModal>
  );
};
