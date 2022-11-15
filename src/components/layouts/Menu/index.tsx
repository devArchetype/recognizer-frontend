import { Gear, UserCircle, UsersThree } from 'phosphor-react'
import { MenuLink } from './components/MenuLink'
import { MenuContainer, NavigationContainer } from './styles'

export const Menu = () => {
  return (
    <MenuContainer>
      <NavigationContainer>
        <ul>
          <MenuLink
            link="/grupos"
            title="Ir para Grupos"
            label="Grupos"
            icon={<UsersThree />}
          />
          <MenuLink
            link="/perfil"
            title="Ir para Perfil"
            label="Perfil"
            icon={<UserCircle />}
          />
          <MenuLink
            link="/preferencias"
            title="Ir para Preferências"
            label="Preferências"
            icon={<Gear />}
          />
        </ul>
      </NavigationContainer>
    </MenuContainer>
  )
}
