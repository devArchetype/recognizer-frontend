import { Container } from './styles';

interface SidebarItemProps {
  icon: JSX.Element;
  text: string;
  anchor: string;
}

export const SidebarItem = ({ icon, text, anchor }: SidebarItemProps) => {
  return (
    <Container>
      {icon}
      <a href={anchor}>{text}</a>
    </Container>
  );
};
