import { Link } from 'react-router-dom';
import { Button } from '../../../components/Button';
import { InputField } from '../../../components/InputField';
import { SessionContainer } from '../../../components/layouts/SessionDefaultLayout/components/SessionContainer';
import {
  ContentContainer,
  Footer,
} from '../../../components/layouts/SessionDefaultLayout/components/SessionContainer/styles';

export const Registration = () => {
  return (
    <SessionContainer heading="Cadastre-se!">
      <ContentContainer>
        <form>
          <InputField label="Nome" border />
          <InputField
            label="Email"
            placeholder="exemplo@recognizer.com"
            border
          />
          <InputField label="Senha" type="password" border />
          <InputField label="Confirmar senha" type="password" border />

          <Button label="Cadastrar" />
        </form>
        <Footer>
          <div>Já possui cadastro?</div>{' '}
          <Link to="/session/login">Acessar</Link>
        </Footer>
      </ContentContainer>
    </SessionContainer>
  );
};
