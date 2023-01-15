import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { ReactNode } from 'react';
import { Button } from '../../components/Button';
import {
    Container,
    Content,
    Footer,
    Header,
    Overlay,
    OverlayContainer,
    Title,
} from './styles';

interface ModalProps {
  heading: string;
  children: ReactNode;
  onCancel?: () => void;
  onSave?: () => void;
}

interface ModalTriggerProps {
  trigger: JSX.Element;
  modal: JSX.Element;
}

export const ModalTrigger = ({ trigger, modal }: ModalTriggerProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      {modal}
    </Dialog.Root>
  );
};

export const BaseModal = ({
  heading,
  children,
  onCancel,
  onSave,
}: ModalProps) => {
  const handleCancel = () => {
    onCancel && onCancel();
  };

  const handleSave = () => {
    onSave && onSave();
  };

  return (
    <Dialog.Portal>
      <OverlayContainer>
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
              <Button
                label="Cancelar"
                title="Cancelar"
                variant="secondary"
                onClick={handleCancel}
              />
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button
                label="Salvar"
                title="Salvar"
                variant="primary"
                onClick={handleSave}
              />
            </Dialog.Close>
          </Footer>
        </Container>
      </OverlayContainer>
      <Overlay />
    </Dialog.Portal>
  );
};
