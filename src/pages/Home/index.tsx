import { HomeContainer, MainContainer } from './styles';

import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { ContactSection } from './components/ContactSection';

export const Home = () => {
  return (
    <HomeContainer>
      <Header />

      <MainContainer>
        <HomeSection />

        <ContactSection />
      </MainContainer>
    </HomeContainer>
  );
};
