import { ArrowUUpLeft } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { Column, Dialog, NotFoundPageContainer } from './styles';

export const NotFound = () => {
  return (
    <NotFoundPageContainer>
      <Dialog>
        <Breadcrumb />
        <Column>
          <Logo />
          <img src="/images/not-found.svg" alt="Erro 404" />
        </Column>
        <Column>
          <h1>Oops... Página não encontrada!</h1>
          <div>
            <p>Desculpe, a página que você solicitou não foi encontrada.</p>
            <p>Confira o endereço ou tente novamente em alguns minutos.</p>
          </div>
          <Link to="/">
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
