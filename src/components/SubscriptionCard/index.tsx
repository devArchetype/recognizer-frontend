import { CaretRight, Check, CircleWavy } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import {
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
  badge: 'gray' | 'purple' | 'yellow';
  price: number;
  description: string;
  details: string[];
}

export const SubscriptionCard = () => {
  const details = [
    'Alguma funcionalidade',
    'Alguma funcionalidade',
    'Alguma funcionalidade',
  ];

  const navigate = useNavigate();

  const handleNavigateToGroups = () => {
    navigate('/grupos');
  };

  return (
    <SubscriptionCardContainer>
      <CardContent>
        <Heading>
          <div>
            <CircleWavy />
          </div>
          <strong>Grátis</strong>
        </Heading>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          ex porro.
        </Description>
        <Price>00</Price>
        <DetailsContainer>
          <strong>O plano grátis inclui:</strong>
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
