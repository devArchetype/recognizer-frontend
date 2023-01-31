import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components/Button';
import { AuthContext } from '../../../../contexts/AuthContext';
import { HomeBaseSection } from '../../../../layouts/HomeBaseSection';
import { ButtonsWrapper, ImageContainer } from './styles';

export const HomeSection = () => {
  const { authenticated } = useContext(AuthContext);

  return (
    <HomeBaseSection
      id="home"
      heading="Uma super frase de efeito criativa e motivacional!"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
      laborum magnam ab placeat vero dicta omnis quia quibusdam culpa"
    >
      <ImageContainer>
        <img
          src="/images/demonstration.svg"
          alt="Demonstração em imagem do visual da aplicação Recognizer"
          loading="lazy"
        />
      </ImageContainer>

      <ButtonsWrapper>
        <Link to={authenticated ? '/grupos' : '/sessao/cadastrar'}>
          <Button label="Registre-se gratuitamente" />
        </Link>
        <Link to={authenticated ? '/grupos' : '/sessao/acessar'}>
          <Button label="Entrar" variant="tertiary" />
        </Link>
      </ButtonsWrapper>
    </HomeBaseSection>
  );
};
