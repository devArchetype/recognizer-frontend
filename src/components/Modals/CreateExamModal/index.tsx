import autoAnimate from '@formkit/auto-animate';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Article,
  CalendarPlus,
  CheckCircle,
  TextAlignLeft,
} from 'phosphor-react';
import { useEffect, useId, useRef } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { InputField } from '../../InputField';
import { TextareaField } from '../../TextareaField';
import { BaseModal, ModalProps } from '../../base/BaseModal';
import { InputWrapper, ModalFormContainer } from '../../base/BaseModal/styles';
import { NewAnswerField } from './components/NewAnswerField';
import { NewAnswersList, NewAnswersListLimiter } from './styles';

export const CreateExamModal = ({ handleModalDisplay }: ModalProps) => {
  const answersAmount = {
    min: 3,
    max: 30,
  };
  const answers = Array.from(Array(answersAmount.min).keys());

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
    newAnswers: zod
      .object({
        number: zod.string(),
        answer: zod
          .string()
          .min(1, { message: 'Selecione a alternativa' })
          .max(1, { message: 'Alternativa inválida' }),
      })
      .array()
      .min(
        answersAmount.min,
        `Você deve adicionar pelo menos ${answersAmount.min} questões`
      )
      .max(answersAmount.max, `Máximo de ${answersAmount.max} questões`),
  });

  type CreateExamFormData = zod.infer<typeof CreateExamSchema>;

  const LoginForm = useForm<CreateExamFormData>({
    resolver: zodResolver(CreateExamSchema),
    defaultValues: {
      newAnswers: answers.map((_, i) => ({
        number: String(i),
        answer: '',
      })),
    },
  });

  const { formState, control, register, handleSubmit, reset } = LoginForm;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'newAnswers',
  });
  const newAnswersAmount = fields.length;

  const { errors } = formState;
  const CREATE_EXAM_FORM_ID = useId();

  const handleClearForm = () => {
    reset();
    handleModalDisplay!();
  };

  const handleCreateFormSubmit = ({
    name,
    date,
    answersAmount,
    description,
    newAnswers,
  }: CreateExamFormData) => {
    const updatedAnsers = newAnswers.map((answer, index) => ({
      ...answer,
      number: `${index}`,
    }));

    console.log({
      name,
      date,
      answersAmount,
      description,
      updatedAnsers,
    });
    handleClearForm();
  };

  const answersListRef = useRef(null);

  useEffect(() => {
    answersListRef.current && autoAnimate(answersListRef.current);
  }, [answersListRef]);

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
          <InputWrapper>
            <InputField
              label="Data"
              type="date"
              icon={<CalendarPlus />}
              register={register('date', {
                required: false,
                valueAsDate: true,
              })}
              full
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
              full
              errorMessage={
                errors.answersAmount && errors.answersAmount.message
              }
            />
          </InputWrapper>
          <TextareaField
            label="Descrição"
            icon={<TextAlignLeft />}
            register={register('description')}
            rows={7}
            errorMessage={errors.description && errors.description.message}
          />
          <NewAnswersListLimiter>
            <NewAnswersList ref={answersListRef}>
              {fields.map(({ id }, index) => {
                const isLast = index === newAnswersAmount - 1;
                return (
                  <NewAnswerField
                    key={id}
                    index={index}
                    maxSize={answersAmount.max}
                    isLast={isLast}
                    errors={errors}
                    add={append}
                    remove={remove}
                    register={register}
                  />
                );
              })}
            </NewAnswersList>
          </NewAnswersListLimiter>
        </form>
      </ModalFormContainer>
    </BaseModal>
  );
};
