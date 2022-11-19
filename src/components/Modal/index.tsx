import { X } from 'phosphor-react';
import { forwardRef, ReactNode, useImperativeHandle, useState } from 'react';
import { Button } from '../Button';
import { Dialog, Footer, Header, Overlay } from './styles';

interface ModalProps {
  isVisible?: boolean;
  heading: string;
  children: ReactNode;
}

const ModalComponent = (
  { isVisible = false, heading, children }: ModalProps,
  ref: any
) => {
  const [modalVisibility, setModalVisibility] = useState(isVisible);

  const handleModalVisibility = () => {
    console.log('oi', modalVisibility);

    setModalVisibility((prevVisibility) => !prevVisibility);
  };

  useImperativeHandle(ref, () => ({
    handleModalVisibility,
  }));

  return (
    <Overlay isVisible={modalVisibility}>
      <Dialog>
        <Header>
          <h2>{heading}</h2>
          <Button
            label="Fechar"
            icon={<X weight="bold" />}
            onClick={handleModalVisibility}
            title="Fechar"
            variant="icon"
          />
        </Header>
        {children}
        <Footer>
          <Button
            label="Cancelar"
            onClick={handleModalVisibility}
            title="Cancelar"
            variant="secondary"
          />
          <Button
            label="Salvar"
            onClick={handleModalVisibility}
            title="Salvar"
            variant="primary"
          />
        </Footer>
      </Dialog>
    </Overlay>
  );
};

export const Modal = forwardRef(ModalComponent);
