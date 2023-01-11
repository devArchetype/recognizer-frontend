import styled from 'styled-components';
import { BasePage } from '../../layouts/BasePage';

export const PreferencesPageContainer = styled(BasePage)``;

export const LayoutContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};

  @media ${(props) => props.theme.screen.sm} {
    flex-direction: row;
  }
`;

export const PageContainer = styled.div`
  flex: 1;
`;
