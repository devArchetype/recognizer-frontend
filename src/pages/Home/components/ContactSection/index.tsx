import {
  SectionContainer,
  HeadingContainer,
  SectionContent,
  FormContact,
  ImageContainer,
} from './styles';

export const ContactSection = () => {
  return (
    <SectionContainer id="contact">
      <HeadingContainer>
        <h1>Fale Conosco</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          laborum magnam ab placeat vero dicta omnis quia quibusdam culpa
          dfjsodcw dsadsads fdf figa
        </p>
      </HeadingContainer>

      <SectionContent>
        <FormContact>
          <input type="text" name="name" placeholder="Nome" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Mensagem"></textarea>
        </FormContact>
        <ImageContainer></ImageContainer>
      </SectionContent>
    </SectionContainer>
  );
};
