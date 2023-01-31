import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { Avatar } from '../../components/Avatar';
import { Logo } from '../../components/Logo';
import { AuthContext } from '../../contexts/AuthContext';
import { HeaderContainer, Wrapper } from './styles';


export const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <HeaderContainer>
      <Link to="/grupos">
        <Logo />
      </Link>
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
