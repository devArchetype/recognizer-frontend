import { BaseCard } from '../../../layouts/BaseCard';

interface GroupCardProps {
  id: string;
  name: string;
}

export const GroupCard = ({ id, name }: GroupCardProps) => {
  return (
    <BaseCard label={name} buttonLabel="Ver grupo" target={`/grupos/${id}/`}>
      <div>vgasdfgsd</div>
    </BaseCard>
  );
};
