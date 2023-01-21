import { BaseCard, CardContentItem } from '../../base/BaseCard';

interface MemberCardProps {
  target?: string;
  name: string;
  memberId: string | number;
}

export const MemberCard = ({
  target = '',
  name,
  memberId,
}: MemberCardProps) => {
  return (
    <BaseCard label={name} buttonLabel="Ver prova" target={target}>
      <CardContentItem title="Membros" label="Matrícula:" value={memberId} />
    </BaseCard>
  );
};
