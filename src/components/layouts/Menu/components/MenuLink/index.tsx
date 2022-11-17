import { NavLink } from 'react-router-dom';
import { NavigationItem } from './styles';

interface MenuLinkProps {
  title: string
  label: string
  icon?: JSX.Element
  link: string
}

export const MenuLink = ({ link, title, label, icon }: MenuLinkProps) => {
  return (
    <NavigationItem>
      <NavLink to={link} title={title}>
        <span>{icon}</span>
        <span>{label}</span>
      </NavLink>
    </NavigationItem>
  );
};
