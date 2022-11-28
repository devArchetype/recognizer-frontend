import {
  AuthenticationSection,
  AuthenticationMain,
  AuthenticationHeader,
  InputGroup,
  ButtonGroups,
} from './styles';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';

interface Authentication {
  page: string;
}

export const Authentication = ({page}: Authentication) => {
  return (
    <AuthenticationMain>
      <AuthenticationSection>
        <AuthenticationHeader>
          <Logo />
          <h2>
            {page == 'login' && 'Seja bem-vindo!'}
            {page == 'cadastro' && 'Cadastre-se!'}
            {page == 'recuperacao' && 'Alterar senha?'}
          </h2>
        </AuthenticationHeader>
        
        {/*<InputGroup>
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
        </ButtonGroups> */}
      </AuthenticationSection>
    </AuthenticationMain>
  );
};

