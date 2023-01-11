import { Outlet } from 'react-router-dom';
import { DefaultLayoutContainer } from './styles';

export const SessionDefaultLayout = () => {
  return (
    <DefaultLayoutContainer>
      <Outlet />
    </DefaultLayoutContainer>
  );
};
