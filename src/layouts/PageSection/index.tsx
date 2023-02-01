import { ReactNode } from 'react';
import { Actions, ActionsWrapper, PageSectionContainer } from './styles';

interface PageSectionProps {
  children: ReactNode;
  heading: string;
  srHeading?: boolean;
  actions?: ReactNode;
}

export const PageSection = ({
  children,
  heading,
  srHeading = false,
  actions,
}: PageSectionProps) => {
  return (
    <PageSectionContainer className="page-section">
      <Actions srHeading={srHeading}>
        <h2>{heading}</h2>

        <ActionsWrapper>{actions}</ActionsWrapper>
      </Actions>
      {children}
    </PageSectionContainer>
  );
};
