import { Outlet } from 'react-router-dom';
import { PreferencesMenu } from './components/PreferencesMenu';
import {
  LayoutContainer,
  PageContainer,
  PreferencesPageContainer
} from './styles';

export const PreferencesDefaultLayout = () => {
  return (
    <PreferencesPageContainer heading="Preferências">
      <LayoutContainer>
        <PreferencesMenu />

        <PageContainer>
          <Outlet />
        </PageContainer>
      </LayoutContainer>
    </PreferencesPageContainer>
  );
};
