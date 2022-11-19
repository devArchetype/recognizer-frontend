import { X } from 'phosphor-react';
import { forwardRef, ReactNode, useImperativeHandle, useState } from 'react';
import { Dialog, Footer, Header, Overlay } from './styles';

interface ModalProps {
  isVisible?: boolean;
  heading: string;
  children: ReactNode;
}

const ModalComponent = (
  { isVisible = false, heading, children }: ModalProps,
  ref: any,
) => {
  const [modalVisibility, setModalVisibility] = useState(isVisible);

  const handleModalVisibility = () => {
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
          <button onClick={handleModalVisibility} title="Fechar">
            <X />
          </button>
        </Header>
        {children}
        <Footer>
          <button>Salvar</button>
          <button>Cancelar</button>
        </Footer>
      </Dialog>
    </Overlay>
  );
};

export const Modal = forwardRef(ModalComponent);
