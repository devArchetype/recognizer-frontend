import { SectionContainer, HeadingContainer, ImageContainer } from './styles';

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
    </SectionContainer>
  );
};
