import { ReactNode } from 'react';
import { HeadingContainer, HomeBaseSectionContainer } from './styles';

interface HomeBaseSectionProps {
  id: string;
  heading: string;
  description: string;
  children: ReactNode;
}

export const HomeBaseSection = ({
  id,
  heading,
  description,
  children,
}: HomeBaseSectionProps) => {
  return (
    <HomeBaseSectionContainer id={id}>
      <HeadingContainer>
        <h2>{heading}</h2>
        <p>{description}</p>
      </HeadingContainer>

      {children}
    </HomeBaseSectionContainer>
  );
};
