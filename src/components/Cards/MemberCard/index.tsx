import { BaseCard } from '../../../layouts/BaseCard';

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
      <div>
        <span>{'Matrícula:'}</span>
      </div>
      <div>
        <span>{memberId}</span>
      </div>
    </BaseCard>
  );
};
