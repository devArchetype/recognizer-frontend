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
  breadCrumb?: boolean;
}

export const BasePage = ({
  children,
  heading,
  actions,
  breadCrumb = true,
}: BasePageProps) => {
  return (
    <BasePageContainer>
      <PageHeader>
        <PageHeaderContent>
          {breadCrumb && <Breadcrumb />}
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
