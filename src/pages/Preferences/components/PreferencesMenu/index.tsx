import { SlidersHorizontal } from 'phosphor-react';
import { MenuLink } from '../../../../layouts/Menu/components/MenuLink';
import { NavigationContainer, PreferencesMenuContainer } from './styles';

export const PreferencesMenu = () => {
  return (
    <PreferencesMenuContainer>
      <NavigationContainer>
        <ul>
          <MenuLink
            link="/preferencias/geral"
            title="Ir para Preferências Gerais"
            label="Geral"
            icon={<SlidersHorizontal />}
          />
        </ul>
      </NavigationContainer>
    </PreferencesMenuContainer>
  );
};
