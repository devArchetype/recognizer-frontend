import { Button } from '../../../../components/Button';
import { SampleModal } from '../../../../components/Modals/SampleModal';
import { ModalTrigger } from '../../../../layouts/BaseModal';
import { HeadingContainer, ImageContainer, SectionContainer } from './styles';

export const HomeSection = () => {
  return (
    <SectionContainer id="home">
      <HeadingContainer>
        <h1>Uma super frase de efeito criativa e motivacional!</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          laborum magnam ab placeat vero dicta omnis quia quibusdam culpa
        </p>
      </HeadingContainer>

      <ImageContainer>
        <img
          src="/images/demonstration.svg"
          alt="Demonstração em imagem do visual da aplicação Recognizer"
        />
      </ImageContainer>
      <ModalTrigger
        trigger={
          <Button
            label="Abrir modal de exemplo"
            title="Abrir modal de exemplo"
            variant="primary"
          />
        }
        modal={<SampleModal />}
      />
    </SectionContainer>
  );
};
