import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { ReactNode } from 'react';
import { Button } from '../../Button';
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
  formId?: string;
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
  formId,
  onCancel,
  onSave,
}: ModalProps) => {
  const hasForm = !!formId;

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
            <Button
              type={hasForm ? 'submit' : 'button'}
              form={hasForm ? formId : ''}
              label="Salvar"
              title="Salvar"
              variant="primary"
              onClick={handleSave}
            />
          </Footer>
        </Container>
      </OverlayContainer>
      <Overlay />
    </Dialog.Portal>
  );
};
