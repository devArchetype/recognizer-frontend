import { useState } from 'react';

import { GithubLogo, MoonStars } from 'phosphor-react';
import { HeaderContainer, NavContainer, ListContainer } from './styles';

import { Logo } from '../../../../components/Logo';

export const Header = () => {
  const [navBar, setNavBar] = useState(false);

  const changeBackg = (event: Event) => {
    console.log(window.scrollY);

    if (window.scrollY >= 80) setNavBar(true);
    else setNavBar(false);
  };

  window.addEventListener('scroll', changeBackg);

  return (
    <HeaderContainer>
      <Logo />

      <NavContainer className={navBar ? 'sticky' : ''}>
        <ListContainer>
          <li>
            <a href="#top">Início</a>
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
