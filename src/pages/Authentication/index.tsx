import {
  AuthenticationSection,
  AuthenticationMain,
  AuthenticationHeader,
  InputGroup,
  ButtonGroups,
} from './styles';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';

interface Authentication {
  page: string;
}

export const Authentication = ({ page }: Authentication) => {
  const renderExactContent = () => {
    switch (page) {
      case 'login':
        return (
          <>
            <Button label="Login" title="Login" type="submit" />
            <div>
              <p>Não possui cadastro?</p>
              <Link to="/cadastro"> Registre-se</Link>
            </div>
          </>
        );

      case 'cadastro':
        return (
          <>
            <Button label="Cadastrar" title="Cadastrar" type="submit" />
            <div>
              <p>Já possui cadastro?</p>
              <Link to="/login"> Login</Link>
            </div>
          </>
        );

      case 'recuperacao':
        return (
          <>
            <Button label="Confirmar" title="Confirmar" type="submit" />
            <div>
              <p>Não possui cadastro?</p>
              <Link to="/cadastro"> Registre-se</Link>
            </div>
          </>
        );
    }
  };

  const renderExactInputs = () => {
    switch (page) {
      case 'login':
        return (
          <>
            <div>
              <label htmlFor="">Usuário </label>
              <input
                name="name"
                type="text"
                placeholder="Digite o nome do usuário"
              />
            </div>

            <div>
              <label htmlFor="">Senha </label>
              <div>
                <input
                  name="password"
                  type="password"
                  placeholder="Digite a senha do usuário"
                />
                <Link to="/recuperacao" className="anchor">
                  {' '}
                  Esqueceu a senha?{' '}
                </Link>
              </div>
            </div>
          </>
        );

      case 'cadastro':
        return (
          <>
            <div>
              <label htmlFor="">Nome </label>
              <input
                name="name"
                type="text"
                placeholder="Digite o nome do usuário"
              />
            </div>

            <div>
              <label htmlFor="">Email </label>
              <input
                name="email"
                type="email"
                placeholder="Digite o email do usuário"
              />
            </div>

            <div>
              <label htmlFor="">Senha </label>
              <input
                name="password"
                type="password"
                placeholder="Digite a senha do usuário"
              />
            </div>

            <div>
              <label htmlFor="">Confirmar senha </label>
              <input
                name="new_password"
                type="password"
                placeholder="Confirme a senha do usuário"
              />
            </div>
          </>
        );

      case 'recuperacao':
        return (
          <>
            <div>
              <label htmlFor="">Email </label>
              <input
                name="email"
                type="email"
                placeholder="Digite o email do usuário"
              />
            </div>

            <div>
              <label htmlFor="">Nova senha </label>
              <input
                name="password"
                type="password"
                placeholder="Digite a nova senha do usuário"
              />
            </div>

            <div>
              <label htmlFor="">Confirmar nova senha </label>
              <input
                name="new_password"
                type="password"
                placeholder="Confirme a nova senha do usuário"
              />
            </div>
          </>
        );
    }
  };

  return (
    <AuthenticationMain>
      <AuthenticationSection>
        <AuthenticationHeader>
          <Logo />
          <h2>
            {page === 'login' && 'Seja bem-vindo!'}
            {page === 'cadastro' && 'Cadastre-se!'}
            {page === 'recuperacao' && 'Alterar senha?'}
          </h2>
        </AuthenticationHeader>

        <InputGroup>{renderExactInputs()}</InputGroup>

        <ButtonGroups>{renderExactContent()}</ButtonGroups>
      </AuthenticationSection>
    </AuthenticationMain>
  );
};
