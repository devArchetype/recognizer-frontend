import { ReactNode } from 'react';
import { Breadcrumb } from '../../Breadcrumb';
import { BasePageContainer, Heading, PageContent, PageHeader } from './styles';

interface BasePageProps {
  children: ReactNode;
  heading: string;
}

export const BasePage = ({ children, heading }: BasePageProps) => {
  return (
    <BasePageContainer>
      <PageHeader>
        <Breadcrumb />
        <Heading>
          <h1>{heading}</h1>
        </Heading>
      </PageHeader>
      <PageContent>{children}</PageContent>
    </BasePageContainer>
  );
};
