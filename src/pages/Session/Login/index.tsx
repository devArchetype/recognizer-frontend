import { Link } from 'react-router-dom';
import { Button } from '../../../components/Button';
import { InputField } from '../../../components/InputField';
import { SessionContainer } from '../../../components/layouts/SessionDefaultLayout/components/SessionContainer';
import {
  ContentContainer,
  Footer,
} from '../../../components/layouts/SessionDefaultLayout/components/SessionContainer/styles';

export const Login = () => {
  return (
    <SessionContainer heading="Seja bem vindo!">
      <ContentContainer>
        <form>
          <InputField
            label="Email"
            placeholder="exemplo@recognizer.com"
            border
          />
          <InputField label="Senha" type="password" border />

          <Button label="Acessar" />
        </form>

        <Footer>
          <div>Não possui cadastro?</div>{' '}
          <Link to="/session/registration">Cadastre-se</Link>
        </Footer>
      </ContentContainer>
    </SessionContainer>
  );
};
