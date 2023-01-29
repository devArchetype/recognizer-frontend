import { Header } from './components/Header';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { HomeSection } from './sections/HomeSection';
import { SubscriptionSection } from './sections/SubscriptionSection';
import { HomeContainer, MainContainer } from './styles';

export const Home = () => {
  return (
    <HomeContainer>
      <Header />

      <MainContainer>
        <HomeSection />
        <AboutSection />
        <SubscriptionSection />
        <ContactSection />
      </MainContainer>
    </HomeContainer>
  );
};
