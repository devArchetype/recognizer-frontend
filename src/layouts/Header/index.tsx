import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { Avatar } from '../../components/Avatar';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
import { HeaderContainer, Wrapper } from './styles';
import { AuthContext } from '../../contexts/AuthContext';

import { SignOut } from 'phosphor-react';

export const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <HeaderContainer>
      <Logo />
      <Wrapper>
        <Link to="/perfil">
          <Avatar
            email={user.email || ''}
            name={user.name || ''}
            size="sm"
            url={user.avatar || '/images/favicon.svg'}
          />
        </Link>

        <Button
          label="Sair"
          type="button"
          variant="danger"
          icon={<SignOut />}
          onClick={logout}
        />
      </Wrapper>
    </HeaderContainer>
  );
};
