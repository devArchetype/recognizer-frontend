import { useLocation } from 'react-router-dom';
import { Crumb } from './components/Crumb';
import { BreadcrumbContainer } from './styles';

export const Breadcrumb = () => {
  const { pathname } = useLocation();
  const currentRoutes = pathname.split('/').filter((route) => route);

  return (
    <nav>
      <BreadcrumbContainer>
        {currentRoutes.map((route, id) => {
          return (
            <Crumb key={route} id={id} name={route} paths={currentRoutes} />
          );
        })}
      </BreadcrumbContainer>
    </nav>
  );
};
