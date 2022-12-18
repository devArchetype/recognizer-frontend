import { ContactSection } from './components/ContactSection';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { HomeContainer, MainContainer } from './styles';

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
