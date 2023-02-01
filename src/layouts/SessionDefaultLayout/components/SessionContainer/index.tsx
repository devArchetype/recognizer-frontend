import { ReactNode } from 'react';
import { Logo } from '../../../../components/Logo';
import { Container, FormContainer, Header } from './styles';

interface SessionContainerProps {
  heading: string;
  children: ReactNode;
}

export const SessionContainer = ({
  children,
  heading,
}: SessionContainerProps) => {
  return (
    <Container>
      <Header>
        <Logo />
        <h2>{heading}</h2>
      </Header>

      <FormContainer>{children}</FormContainer>
    </Container>
  );
};
