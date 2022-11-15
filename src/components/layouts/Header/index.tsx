import { Avatar } from '../../Avatar'
import { Logo } from '../../Logo'
import { HeaderContainer } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />

      <Avatar
        email="mariaclara@gmail.com"
        name="Maria Clara"
        size="sm"
        url="/images/favicon.svg"
      />
    </HeaderContainer>
  )
}
