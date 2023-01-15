import styled from 'styled-components';

import { BasePage } from '../../layouts/BasePage';
import { PageSection } from '../../layouts/PageSection';

export const GroupPageContainer = styled(BasePage)``;
export const ExamSection = styled(PageSection)``;
export const MembersSection = styled(PageSection)``;

export const GroupsTest = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
`;

export const GroupsMembers = styled.ul`
  display: grid;
  grid-gap: ${(props) => props.theme.spacing.md};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (max-width: 320px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`;
