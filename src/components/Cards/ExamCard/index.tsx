import { BaseCard } from '../../base/BaseCard';

interface ExamCardProps {
  id: string;
  groupId: string;
  name: string;
}

export const ExamCard = ({ id, groupId, name }: ExamCardProps) => {
  return (
    <BaseCard
      label={name}
      buttonLabel="Ver prova"
      target={`/grupos/${groupId}/${id}/`}
    >
      <div>vgasdfgsd</div>
    </BaseCard>
  );
};
