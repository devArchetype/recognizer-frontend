import { File, User } from 'phosphor-react';
import { BaseCard, CardContentItem } from '../../base/BaseCard';

interface GroupCardProps {
  id: string;
  name: string;
  membersAmount: number;
  examsAmount: number;
}

export const GroupCard = ({
  id,
  name,
  membersAmount,
  examsAmount,
}: GroupCardProps) => {
  return (
    <BaseCard label={name} buttonLabel="Ver grupo" target={`/grupos/${id}/`}>
      <CardContentItem
        title="Membros"
        label={<User />}
        value={String(membersAmount).padStart(2, '0')}
      />
      <CardContentItem
        title="Provas"
        label={<File />}
        value={String(examsAmount).padStart(2, '0')}
      />
    </BaseCard>
  );
};
