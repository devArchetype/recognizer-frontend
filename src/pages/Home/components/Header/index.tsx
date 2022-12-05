import { useState } from 'react';

import { GithubLogo, MoonStars, List } from 'phosphor-react';
import { HeaderContainer, NavContainer, ListContainer } from './styles';

import { Logo } from '../../../../components/Logo';
import { Sidebar } from './components/Sidebar';

export const Header = () => {
  const [navBar, setNavBar] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);

  const changeBackg = (event: Event) => {
    if (window.scrollY >= 55) setNavBar(true);
    else setNavBar(false);
  };

  window.addEventListener('scroll', changeBackg);

  return (
    <HeaderContainer className={navBar ? 'sticky' : ''}>
      <Logo />

      <NavContainer>
        {/* <List size={22} onClick={showSiderbar} /> */}
        {sidebar && <Sidebar active={setSidebar} activated={sidebar} />}

        <ListContainer>
          <li>
            <a href="#home">Início</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#subscription">Assinatura</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ListContainer>

        <ListContainer>
          <li>
            <button>
              <MoonStars size={22} />
            </button>
          </li>
          <li>
            <a
              href="https://github.com/devArchetype/recognizer-frontend"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={22} />
            </a>
          </li>
        </ListContainer>
      </NavContainer>
    </HeaderContainer>
  );
};
