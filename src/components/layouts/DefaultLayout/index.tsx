import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Menu } from '../Menu'
import { DefaultLayoutContainer, LayoutSchema, PageContainer } from './styles'

export const DefaultLayout = () => {
  return (
    <DefaultLayoutContainer>
      <Header />

      <LayoutSchema>
        <Menu />
        
        <PageContainer>
          <Outlet />
          <Footer />
        </PageContainer>
      </LayoutSchema>
    </DefaultLayoutContainer>
  )
}
