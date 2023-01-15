import { FormContact, ImageContainer, SectionContent } from './styles';

import { PaperPlaneTilt } from 'phosphor-react';
import { Button } from '../../../../components/Button';
import { HomeBaseSection } from '../../../../layouts/HomeBaseSection';

export const ContactSection = () => {
  return (
    <HomeBaseSection
      id="contact"
      heading="Fale conosco"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
    laborum magnam ab placeat vero dicta omnis quia quibusdam culpa
    dfjsodcw dsadsads fdf figa"
    >
      <SectionContent>
        <FormContact>
          <input type="text" name="name" placeholder="Nome" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Mensagem"></textarea>
          <Button
            type="submit"
            label="Enviar Mensagem"
            title="Enviar Mensagem"
            icon={<PaperPlaneTilt />}
          />
        </FormContact>
        <ImageContainer>
          <img
            src="/images/saly-16.svg"
            alt="Garota sentada de baixo de uma árvore com passaros à volta lendo um livro"
          />
        </ImageContainer>
      </SectionContent>
    </HomeBaseSection>
  );
};
