import { CaretRight } from 'phosphor-react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { CardContainer, ContentList, ContentWrapper } from './styles';
import { Button } from '../../Button';

export interface BaseCardProps {
  label: string;
  target?: string;
  buttonLabel?: string;
  children: ReactNode;
}

export const BaseCard = ({
  label,
  target = '',
  buttonLabel = '',
  children,
}: BaseCardProps) => {
  return (
    <CardContainer>
      <ContentWrapper>
        <strong>{label}</strong>
        <ContentList>{children}</ContentList>
      </ContentWrapper>
      {target && (
        <Link to={target}>
          <Button label={buttonLabel} variant="line" icon={<CaretRight />} />
        </Link>
      )}
    </CardContainer>
  );
};
