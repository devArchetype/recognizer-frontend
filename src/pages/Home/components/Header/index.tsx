import { useContext, useState } from 'react';

import { GithubLogo, List, MoonStars, Sun } from 'phosphor-react';
import { HeaderContainer, ListContainer, NavContainer } from './styles';

import { Link } from 'react-router-dom';
import { Button } from '../../../../components/Button';
import { Logo } from '../../../../components/Logo';
import { AuthContext } from '../../../../contexts/AuthContext';
import { PreferencesContext } from '../../../../contexts/PreferencesContext';
import { Sidebar } from './components/Sidebar';

export const Header = () => {
  const { authenticated } = useContext(AuthContext);
  const { isDark, toggleTheme } = useContext(PreferencesContext);

  const [navBar, setNavBar] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);

  const changeBackg = (event: Event) => {
    if (window.scrollY >= 55) setNavBar(true);
    else setNavBar(false);
  };

  window.addEventListener('scroll', changeBackg);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <HeaderContainer className={navBar ? 'sticky' : ''}>
      <Logo />
      <NavContainer>
        <List size={22} onClick={showSiderbar} className="menu" />
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
            <a href="#contact">Fale Conosco</a>
          </li>
          <li>
            <Link to={authenticated ? '/grupos' : '/session/login'}>Login</Link>
          </li>
        </ListContainer>

        <ListContainer>
          <li>
            <Button
              label="Alterar tema"
              variant="icon"
              icon={isDark ? <Sun size={22} /> : <MoonStars size={22} />}
              onClick={handleToggleTheme}
            />
          </li>
          <li>
            <a
              href="https://github.com/devArchetype/recognizer-frontend"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                label="Acessar repositório do projeto"
                variant="icon"
                icon={<GithubLogo size={22} />}
              />
            </a>
          </li>
        </ListContainer>
      </NavContainer>
    </HeaderContainer>
  );
};
