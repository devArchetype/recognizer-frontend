import { HomeContainer, MainContainer } from './styles';

import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';

export const Home = () => {
  return (
    <HomeContainer>
      <Header />

      <MainContainer>
        <HomeSection />

        <div id="contact">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa
          cumque harum magnam eligendi. Itaque veniam praesentium quos veritatis
          suscipit asperiores cum corporis fuga impedit dolor. Porro aut ad
          quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem facilis quis nihil et consectetur tempora est, nulla
          molestias dignissimos commodi architecto natus voluptate id animi illo
          quaerat facere ab ut. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laudantium nisi eveniet neque alias, atque nemo iste
          pariatur repellendus ea sed nesciunt perspiciatis a ipsa consequatur
          eum? Asperiores tempore quae dicta?
        </div>
      </MainContainer>
    </HomeContainer>
  );
};
