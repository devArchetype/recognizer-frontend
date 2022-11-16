import { ReactNode } from 'react'
import { BasePageContainer, Breadcrumb, Heading, PageHeader } from './styles'

interface BasePageProps {
  children: ReactNode
  heading: string
}

export const BasePage = ({ children, heading }: BasePageProps) => {
  return (
    <BasePageContainer>
      <PageHeader>
        <nav>
          <Breadcrumb>
            <li>place</li>
            <li>/</li>
            <li>holder</li>
            <li>/</li>
            <li>potato</li>
          </Breadcrumb>
        </nav>
        <Heading>
          <h1>{heading}</h1>
        </Heading>
      </PageHeader>
      <main>{children}</main>
    </BasePageContainer>
  )
}
