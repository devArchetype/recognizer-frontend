import { X, House, At, Pen, NewspaperClipping } from 'phosphor-react';
import { SidebarItem } from '../SidebarItem';

import { Container, Content } from './styles';

interface SidebarProps {
  active(active: boolean): void;
  activated: boolean;
}

export const Sidebar = ({ active, activated }: SidebarProps) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={activated}>
      <X color="black" onClick={closeSidebar} />

      <Content>
        <SidebarItem
          icon={<House onClick={closeSidebar} />}
          text="Início"
          anchor="#home"
        />
        <SidebarItem
          icon={<NewspaperClipping onClick={closeSidebar} />}
          text="Sobre"
          anchor="#about"
        />
        <SidebarItem
          icon={<Pen onClick={closeSidebar} />}
          text="Assinatura"
          anchor="#subscription"
        />
        <SidebarItem
          icon={<At onClick={closeSidebar} />}
          text="Contato"
          anchor="#contact"
        />
      </Content>
    </Container>
  );
};
