import { Plus, X } from 'phosphor-react';
import {
  Control,
  Controller,
  FieldValues,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormRegister,
} from 'react-hook-form';
import { FieldErrors } from '../../../../../@types/form';
import { getAnserwersLetters } from '../../../../../utils/getAnswersLetters';
import { Button } from '../../../../Button';
import { ToggleGroup } from '../../../../ToggleGroup';
import {
  AnswerInputWrapper,
  AnswerNumber,
  NewAnswerFieldContainer,
} from './styles';

interface NewAnswerFieldProps {
  index: number;
  isLast: boolean;
  maxSize: number;
  errors: FieldErrors;
  control: Control<FieldValues, 'newAnswers'>;
  add: UseFieldArrayAppend<FieldValues, 'newAnswers'>;
  remove: UseFieldArrayRemove;
  register: UseFormRegister<FieldValues>;
}

export const NewAnswerField = ({
  index,
  isLast,
  maxSize,
  control,
  errors,
  add,
  remove,
  register,
}: NewAnswerFieldProps) => {
  const isOnMaxSize = index === maxSize - 1;
  const ANSWERS_AMOUNT = 5;

  const answers = getAnserwersLetters(ANSWERS_AMOUNT);
  const answersList = answers.map((answer) => {
    return {
      label: answer.toUpperCase(),
      value: answer.toUpperCase(),
    };
  });

  const handleAddParticipant = () => {
    if (!isOnMaxSize) {
      add({ number: String(index), answer: '' });
    }
  };

  const handleRemoveParticipant = () => {
    remove(index);
  };

  return (
    <NewAnswerFieldContainer>
      <AnswerInputWrapper>
        <AnswerNumber {...register(`newAnswers[${index}].number`)}>
          {String(index + 1).padStart(2, '0')}
        </AnswerNumber>
        <Controller
          control={control}
          name={`newAnswers[${index}].answer`}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <ToggleGroup
              items={answersList}
              value={value}
              onValueChange={onChange}
              errorMessage={error && error.message}
            />
          )}
        />
      </AnswerInputWrapper>
      <>
        {isLast ? (
          <Button
            label="Adicionar novo membro"
            title="Adicionar novo membro"
            type="button"
            variant="icon"
            icon={<Plus weight="bold" />}
            onClick={handleAddParticipant}
            srLabel
          />
        ) : (
          <Button
            label="Remover membro"
            title="Remover membro"
            type="button"
            variant="icon"
            icon={<X weight="bold" />}
            onClick={handleRemoveParticipant}
            srLabel
          />
        )}
      </>
    </NewAnswerFieldContainer>
  );
};
