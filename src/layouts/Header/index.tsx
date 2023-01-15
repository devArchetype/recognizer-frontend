import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { AuthContext } from '../../contexts/AuthContext';
import { HeaderContainer, Wrapper } from './styles';

export const Header = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <HeaderContainer>
      <Logo />
      <Wrapper>
        <Link to="/perfil">
          <Avatar
            email="mariaclara@gmail.com"
            name="Maria Clara"
            size="sm"
            url="/images/favicon.svg"
          />
        </Link>
        <Button label="Sair" variant="line" onClick={handleLogout} />
      </Wrapper>
    </HeaderContainer>
  );
};
