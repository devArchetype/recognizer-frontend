import { List, X } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Button } from '../../../../components/Button';
import { Logo } from '../../../../components/Logo';
import { Menu } from './components/Menu';
import { HeaderContainer, HeaderWrapper } from './styles';

export const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleDisplayMenu = () => {
    setDisplayMenu((prevState) => !prevState);

    if (window.innerWidth <= 768) {
      document.body.style.overflow = displayMenu ? 'auto' : 'hidden';
    }
  };

  useEffect(() => {
    window.onscroll = () => setIsScrolling(window.pageYOffset > 0);
  }, []);

  return (
    <HeaderContainer isScrolling={isScrolling}>
      <HeaderWrapper>
        <Logo />

        <nav>
          <Menu display={displayMenu} onItemClick={handleDisplayMenu} />

          <Button
            label={displayMenu ? 'Fechar menu' : 'Abrir menu'}
            srLabel
            variant="icon"
            icon={displayMenu ? <X size={24} /> : <List size={24} />}
            onClick={handleDisplayMenu}
          />
        </nav>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
