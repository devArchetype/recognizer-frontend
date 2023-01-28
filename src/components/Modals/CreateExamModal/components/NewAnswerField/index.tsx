import { Hash, Plus, X } from 'phosphor-react';
import {
  FieldValues,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormRegister,
} from 'react-hook-form';
import { FieldErrors } from '../../../../../@types/form';
import { Button } from '../../../../Button';
import { InputField } from '../../../../InputField';
import { InputWrapper } from '../../../../base/BaseModal/styles';
import { NewAnswerFieldContainer } from './styles';

interface NewAnswerFieldProps {
  index: number;
  isLast: boolean;
  maxSize: number;
  errors: FieldErrors;
  add: UseFieldArrayAppend<FieldValues, string>;
  remove: UseFieldArrayRemove;
  register: UseFormRegister<FieldValues>;
}

export const NewAnswerField = ({
  index,
  isLast,
  maxSize,
  errors,
  add,
  remove,
  register,
}: NewAnswerFieldProps) => {
  const isOnMaxSize = index < maxSize - 1;

  const handleAddParticipant = () => {
    if (isOnMaxSize) {
      add({ number: index, answer: '' });
    }
  };

  const handleRemoveParticipant = () => {
    remove(index);
  };

  return (
    <NewAnswerFieldContainer>
      <InputWrapper>
        <div {...register(`newAnswers[${index}].number`)}>
          {String(index + 1).padStart(2, '0')}
        </div>
        <InputField
          label="Resposta"
          srLabel
          icon={<Hash weight="bold" />}
          register={register(`newAnswers[${index}].answer`)}
          full
          errorMessage={
            errors.newAnswers &&
            errors.newAnswers[index] &&
            errors.newAnswers[index].answer &&
            errors.newAnswers[index].answer.message
          }
        />
      </InputWrapper>
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
