import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { ReactNode, cloneElement, useState } from 'react';
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

interface BaseModalProps {
  heading: string;
  children: ReactNode;
  formId?: string;
  saveButtonLabel?: string;
  cancelButtonLabel?: string;
  onCancel?: () => void;
  onSave?: () => void;
}

interface ModalTriggerProps {
  trigger: JSX.Element;
  modal: JSX.Element;
}

export interface ModalProps {
  handleModalDisplay?: () => void;
}

export const ModalTrigger = ({ trigger, modal }: ModalTriggerProps) => {
  const [displayModal, setDisplayModal] = useState(false);

  const handleDisplayModal = () => {
    setDisplayModal((prevState) => !prevState);
  };

  return (
    <Dialog.Root open={displayModal} onOpenChange={handleDisplayModal}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <OverlayContainer>
          {cloneElement<ModalProps>(modal, {
            handleModalDisplay: handleDisplayModal,
          })}
        </OverlayContainer>
        <Overlay />
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export const BaseModal = ({
  heading,
  children,
  formId,
  saveButtonLabel = 'Salvar',
  cancelButtonLabel = 'Cancelar',
  onCancel,
  onSave,
}: BaseModalProps) => {
  const hasForm = !!formId;

  const handleCancel = () => {
    onCancel && onCancel();
  };

  const handleSave = () => {
    onSave && onSave();
  };

  return (
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
        <Button
          label={cancelButtonLabel}
          title={cancelButtonLabel}
          variant="secondary"
          onClick={handleCancel}
        />
        <Button
          type={hasForm ? 'submit' : 'button'}
          form={hasForm ? formId : undefined}
          label={saveButtonLabel}
          title={saveButtonLabel}
          variant="primary"
          onClick={handleSave}
        />
      </Footer>
    </Container>
  );
};
