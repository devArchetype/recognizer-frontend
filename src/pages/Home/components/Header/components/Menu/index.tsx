import { GithubLogo, MoonStars, Sun } from 'phosphor-react';
import { useContext } from 'react';
import { Button } from '../../../../../../components/Button';
import { PreferencesContext } from '../../../../../../contexts/PreferencesContext';
import { ActionsWrapper, MenuContainer, MenuItem, MenuList } from './styles';

interface MenuProps {
  display: boolean;
  onItemClick: () => void;
}

export const Menu = ({ display, onItemClick }: MenuProps) => {
  const { isDark, toggleTheme } = useContext(PreferencesContext);

  const sections = [
    {
      id: 'home',
      label: 'Início',
    },
    {
      id: 'about',
      label: 'Sobre',
    },
    {
      id: 'subscription',
      label: 'Assinatura',
    },
    {
      id: 'contact',
      label: 'Contato',
    },
  ];

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <MenuContainer displayMenu={display}>
      <MenuList>
        {sections.map(({ id, label }) => {
          return (
            <MenuItem key={id} onClick={onItemClick}>
              <a href={`#${id}`}>{label}</a>
            </MenuItem>
          );
        })}
      </MenuList>

      <ActionsWrapper>
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
      </ActionsWrapper>
    </MenuContainer>
  );
};
