import {
  AuthenticationSection,
  AuthenticationMain,
  AuthenticationHeader,
  InputGroup,
  ButtonGroups,
} from './styles';
import { Logo } from '../Logo';
import { Button } from '../Button';

export const AuthentificationContainer = () => {
  return (
    <AuthenticationMain>
      <AuthenticationSection>
        <AuthenticationHeader>
          <Logo />
          <p>Seja bem-vindo</p>
        </AuthenticationHeader>

        <InputGroup>
          <div>
            <label htmlFor="">Usuario </label>
            <input type="text" placeholder="Digite o nome do usuario" />
          </div>

          <div>
            <label htmlFor="">Senha </label>
            <div>
              <input type="password" placeholder="Digite a senha do usuario" />
              <a href="/potato" className="end-align">
                {' '}
                Esqueceu a senha?
              </a>
            </div>
          </div>
        </InputGroup>

        <ButtonGroups>
          <Button label="Login" title="Login" type="submit" />

          <div>
            <p>Não possui cadastro?</p>
            <a href="/potato"> Registre-se</a>
          </div>
        </ButtonGroups>
      </AuthenticationSection>
    </AuthenticationMain>
  );
};
