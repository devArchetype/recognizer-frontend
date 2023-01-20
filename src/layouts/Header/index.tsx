import { Link } from 'react-router-dom';
import { Avatar } from '../../components/Avatar';
import { Logo } from '../../components/Logo';
import { HeaderContainer, Wrapper } from './styles';

export const Header = () => {
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
      </Wrapper>
    </HeaderContainer>
  );
};
