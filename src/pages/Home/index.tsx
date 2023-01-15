import { Header } from './components/Header';
import { ContactSection } from './sections/ContactSection';
import { HomeSection } from './sections/HomeSection';
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
