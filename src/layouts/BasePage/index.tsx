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
  breadCrumb?: boolean;
}

export const BasePage = ({
  children,
  heading,
  breadCrumb = true,
}: BasePageProps) => {
  return (
    <BasePageContainer>
      <PageHeader>
        <PageHeaderContent>{breadCrumb && <Breadcrumb />}</PageHeaderContent>
        <Heading>
          <h1>{heading}</h1>
        </Heading>
      </PageHeader>
      <PageContent>{children}</PageContent>
    </BasePageContainer>
  );
};
