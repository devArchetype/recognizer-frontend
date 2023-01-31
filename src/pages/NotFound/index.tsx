import { ArrowUUpLeft } from 'phosphor-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { AuthContext } from '../../contexts/AuthContext';
import { Column, Dialog, NotFoundPageContainer } from './styles';

export const NotFound = () => {
  const { authenticated } = useContext(AuthContext);

  return (
    <NotFoundPageContainer>
      <Dialog>
        <Column>
          <Logo />
          <img src="/images/not-found.svg" alt="Erro 404" loading="lazy" />
        </Column>
        <Column>
          <h1>Oops... Página não encontrada!</h1>
          <div>
            <p>Desculpe, a página que você solicitou não foi encontrada.</p>
            <p>Confira o endereço ou tente novamente em alguns minutos.</p>
          </div>
          <Link to={authenticated ? '/grupos' : '/session/login'}>
            <Button
              label="Voltar para o início"
              icon={<ArrowUUpLeft />}
              iconLeft
              title="Voltar para o início"
            />
          </Link>
        </Column>
      </Dialog>
    </NotFoundPageContainer>
  );
};
