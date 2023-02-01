import { CalendarBlank, User } from 'phosphor-react';
import { BaseCard, CardContentItem } from '../../base/BaseCard';

interface ExamCardProps {
  id: string;
  groupId: string;
  name: string;
  examDate: string;
  membersAmount: number;
}

export const ExamCard = ({
  id,
  groupId,
  name,
  examDate,
  membersAmount,
}: ExamCardProps) => {
  const formattedDate = new Intl.DateTimeFormat('pt-BR').format(
    new Date(examDate)
  );

  return (
    <BaseCard
      label={name}
      buttonLabel="Ver prova"
      target={`/grupos/${groupId}/${id}/`}
    >
      <CardContentItem title="Membros" label={<User />} value={membersAmount} />
      <CardContentItem
        title="Data"
        label={<CalendarBlank />}
        value={formattedDate}
      />
    </BaseCard>
  );
};
