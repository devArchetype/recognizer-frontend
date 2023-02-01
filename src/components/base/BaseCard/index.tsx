import { CaretRight } from 'phosphor-react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';
import {
  CardContainer,
  ContentItemContainer,
  ContentList,
  ContentWrapper,
} from './styles';

interface CardContentItemProps {
  title: string;
  label: string | JSX.Element;
  value: string | number;
}

export interface BaseCardProps {
  label: string;
  target?: string;
  buttonLabel?: string;
  children: ReactNode;
}

export const CardContentItem = ({
  title,
  label,
  value,
}: CardContentItemProps) => {
  return (
    <ContentItemContainer title={title}>
      <div>{label}</div>
      <div>{value}</div>
    </ContentItemContainer>
  );
};

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
