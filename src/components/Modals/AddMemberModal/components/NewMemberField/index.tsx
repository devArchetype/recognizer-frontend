import { Hash, IdentificationCard, Plus, X } from 'phosphor-react';
import {
  FieldValues,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormRegister,
} from 'react-hook-form';
import { FieldErrors } from '../../../../../@types/form';
import { Button } from '../../../../Button';
import { InputField } from '../../../../InputField';
import { InputWrapper, NewMemberFieldContainer } from './styles';

interface NewMemberFieldProps {
  id: string;
  index: number;
  isLast: boolean;
  errors: FieldErrors;
  add: UseFieldArrayAppend<FieldValues, string>;
  remove: UseFieldArrayRemove;
  register: UseFormRegister<FieldValues>;
}

export const NewMemberField = ({
  index,
  isLast,
  errors,
  add,
  remove,
  register,
}: NewMemberFieldProps) => {
  const handleAddParticipant = () => {
    add({ name: '', externalId: '' });
  };

  const handleRemoveParticipant = () => {
    remove(index);
  };

  return (
    <NewMemberFieldContainer>
      <InputWrapper>
        <InputField
          label="Name"
          srLabel
          icon={<IdentificationCard weight="bold" />}
          placeholder="Nome"
          register={register(`newMembers[${index}].name`, {
            required: true,
          })}
          errorMessage={
            errors.newMembers &&
            errors.newMembers[index] &&
            errors.newMembers[index].name &&
            errors?.newMembers[index]?.name?.message
          }
        />
        <InputField
          label="externalId"
          srLabel
          icon={<Hash weight="bold" />}
          placeholder="Matrícula"
          register={register(`newMembers[${index}].externalId`)}
          errorMessage={
            errors.newMembers &&
            errors.newMembers[index] &&
            errors.newMembers[index].externalId &&
            errors.newMembers[index].externalId.message
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
    </NewMemberFieldContainer>
  );
};
