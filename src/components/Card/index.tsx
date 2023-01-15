import { CaretRight } from 'phosphor-react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { CardContainer, ContentList, ContentWrapper } from './styles';

interface CardProps {
  id: string;
  heading: string;
  content?: ReactNode | string;
  hideBtn?: boolean;
  label?: string;
  target?: string;
}

export const Card = ({
  id,
  heading,
  content,
  hideBtn,
  label,
  target,
}: CardProps) => {
  return (
    <CardContainer>
      <ContentWrapper>
        <strong>{heading}</strong>
        <ContentList>{content}</ContentList>
      </ContentWrapper>
      {!hideBtn && (
        <Link to={target ? target + `/${id}` : `/grupos/${id}/`}>
          <Button
            label={label || 'Ver grupo'}
            variant="line"
            icon={<CaretRight />}
          />
        </Link>
      )}
    </CardContainer>
  );
};
