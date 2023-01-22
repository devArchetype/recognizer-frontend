import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { Avatar } from '../../components/Avatar';
import { Logo } from '../../components/Logo';
import { HeaderContainer, Wrapper } from './styles';
import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
  const { user } = useContext(AuthContext);

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
      </Wrapper>
    </HeaderContainer>
  );
};
