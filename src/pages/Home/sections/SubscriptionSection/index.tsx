import { SubscriptionTier } from '../../../../@types/tier';
import { SubscriptionCard } from '../../../../components/SubscriptionCard';
import { HomeBaseSection } from '../../../../layouts/HomeBaseSection';
import { CardsListContainer, SectionContent } from './styles';

export const SubscriptionSection = () => {
  const subscriptionTiers = [
    {
      name: 'Grátis',
      badge: '',
      tier: SubscriptionTier.FREE,
      price: 0,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendisex porro.',
      details: ['10 grupos', '2 provas / grupo', '200 gabaritos / mês'],
      disabled: false,
    },
    {
      name: 'PRO',
      tier: SubscriptionTier.PRO,
      badge: 'Em breve!',
      price: 19,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendisex porro.',
      details: [
        'Grupos ilimitados',
        'Provas ilimitadas',
        '400 gabaritos / mês',
      ],
      disabled: true,
    },
    {
      name: 'PREMIUM',
      tier: SubscriptionTier.PREMIUM,
      badge: 'Em breve!',
      price: 29,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendisex porro.',
      details: [
        'Grupos ilimitados',
        'Provas ilimitadas',
        'Gabaritos ilimitados',
      ],
      disabled: true,
    },
  ];

  return (
    <HomeBaseSection
      id="subscription"
      heading="Escolha o melhor plano para você"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
    laborum magnam ab placeat vero dicta omnis quia quibusdam culpa
    dfjsodcw dsadsads fdf figa"
    >
      <CardsListContainer>
        {subscriptionTiers.map(
          ({ name, badge, tier, price, description, details, disabled }) => {
            return (
              <SubscriptionCard
                key={name}
                name={name}
                badge={badge}
                tier={tier}
                disabled={disabled}
                price={price}
                description={description}
                details={details}
              />
            );
          }
        )}
      </CardsListContainer>

      <SectionContent></SectionContent>
    </HomeBaseSection>
  );
};
