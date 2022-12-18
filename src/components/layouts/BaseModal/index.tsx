import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { ReactNode } from 'react';
import { Button } from '../../Button';
import { Container, Content, Footer, Header, Overlay, Title } from './styles';

interface ModalProps {
  heading: string;
  children: ReactNode;
}

export const BaseModal = ({ heading, children }: ModalProps) => {
  return (
    <Dialog.Portal>
      <Container>
        <Header>
          <Title>{heading}</Title>
          <Dialog.Close asChild>
            <Button
              label="Fechar"
              icon={<X weight="bold" />}
              title="Fechar"
              variant="icon"
            />
          </Dialog.Close>
        </Header>
        <Content>{children}</Content>
        <Footer>
          <Dialog.Close asChild>
            <Button label="Cancelar" title="Cancelar" variant="secondary" />
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button label="Salvar" title="Salvar" variant="primary" />
          </Dialog.Close>
        </Footer>
      </Container>
      <Overlay />
    </Dialog.Portal>
  );
};
