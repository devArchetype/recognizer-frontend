import { ReactNode } from 'react';
import { Breadcrumb } from '../../components/Breadcrumb';
import {
    BasePageContainer,
    Heading,
    PageContent,
    PageHeader,
    PageHeaderContent,
} from './styles';

interface BasePageProps {
  children: ReactNode;
  heading: string;
  actions?: ReactNode;
}

export const BasePage = ({ children, heading, actions,BreadCrumb = true }: BasePageProps) => {
  return (
    <BasePageContainer>
      <PageHeader>
        <PageHeaderContent>
          {BreadCrumb ? <Breadcrumb /> : null}
          <div>{actions}</div>
        </PageHeaderContent>
        <Heading>
          <h1>{heading}</h1>
        </Heading>
      </PageHeader>
      <PageContent>{children}</PageContent>
    </BasePageContainer>
  );
};
