import { SubscriptionCard } from '../../../../components/SubscriptionCard';
import { HomeBaseSection } from '../../../../layouts/HomeBaseSection';
import { CardsListContainer, SectionContent } from './styles';

export const SubscriptionSection = () => {
  return (
    <HomeBaseSection
      id="subscription"
      heading="Escolha o melhor plano para você"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
    laborum magnam ab placeat vero dicta omnis quia quibusdam culpa
    dfjsodcw dsadsads fdf figa"
    >
      <CardsListContainer>
        <SubscriptionCard />
        <SubscriptionCard />
        <SubscriptionCard />
      </CardsListContainer>

      <SectionContent></SectionContent>
    </HomeBaseSection>
  );
};
