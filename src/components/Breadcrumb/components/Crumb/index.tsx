import { CrumbContainer } from './styles';

interface CrumbProps {
  id: number;
  name: string;
  paths: string[];
}

export const Crumb = ({ id, name, paths }: CrumbProps) => {
  const crumbName = name.charAt(0).toUpperCase() + name.slice(1);
  const pathsToExludeSlash = [paths.length - 1];
  const completePath = paths.slice(0, id + 1).join('/');

  return (
    <>
      <li title={`Ir para ${crumbName}`}>
        <CrumbContainer to={`/${completePath}`}>{crumbName}</CrumbContainer>
      </li>
      <li>{!pathsToExludeSlash.includes(id) && <span>/</span>}</li>
    </>
  );
};
