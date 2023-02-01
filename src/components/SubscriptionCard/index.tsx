import { CaretRight, Check, CircleWavy, CircleWavyCheck } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { SubscriptionTier } from '../../@types/tier';
import { Button } from '../Button';
import {
  CardBadge,
  CardContent,
  Description,
  DetailItem,
  DetailsContainer,
  DetailsList,
  Heading,
  Price,
  SubscriptionCardContainer,
} from './styles';

interface SubscriptionCardProps {
  name: string;
  badge: string;
  tier: SubscriptionTier;
  price: number;
  description: string;
  details: string[];
  disabled: boolean;
}

export const SubscriptionCard = ({
  name,
  badge,
  tier,
  price,
  description,
  details,
  disabled,
}: SubscriptionCardProps) => {
  const hasBadge = !!badge;

  const tierIcon = {
    FREE: <CircleWavy />,
    PRO: <CircleWavyCheck />,
    PREMIUM: <CircleWavyCheck weight="fill" />,
  };

  const navigate = useNavigate();

  const handleNavigateToGroups = () => {
    navigate('/grupos');
  };

  return (
    <SubscriptionCardContainer>
      {hasBadge && <CardBadge>{badge}</CardBadge>}

      <CardContent disabled={disabled}>
        <Heading tier={tier}>
          <div>{tierIcon[tier]}</div>
          <strong>{name}</strong>
        </Heading>
        <Description>{description}</Description>
        <Price>{String(price).padStart(2, '0')}</Price>
        <DetailsContainer>
          <strong>O plano {name} inclui:</strong>
          <DetailsList>
            {details.map((detail, index) => {
              return (
                <DetailItem key={`${detail}_${index}`}>
                  <span>
                    <Check weight="bold" />
                  </span>
                  <p>{detail}</p>
                </DetailItem>
              );
            })}
          </DetailsList>
        </DetailsContainer>
        <Button
          label="Assinar plano"
          icon={<CaretRight />}
          onClick={handleNavigateToGroups}
        />
      </CardContent>
    </SubscriptionCardContainer>
  );
};
