import { Avatar } from '../../components/Avatar';
import { PageSection } from '../../layouts/PageSection';
import {
  ContentSection,
  Information,
  InformatiosWrapper,
  ProfilePageContainer,
  StatisticContainer,
  StatisticsWrapper,
  Wrapper,
} from './styles';

export const Profile = () => {
  return (
    <ProfilePageContainer heading="Seu perfil">
      <Wrapper>
        <ContentSection>
          <Avatar
            email=""
            name="Maria Clara"
            url="/images/favicon.svg"
            size="xl"
            orientation="column"
          />

          <StatisticsWrapper>
            <StatisticContainer>
              <strong>85</strong>
              <div>grupos</div>
            </StatisticContainer>
            <StatisticContainer>
              <strong>215</strong>
              <div>alunos</div>
            </StatisticContainer>
          </StatisticsWrapper>
        </ContentSection>
        <PageSection heading="Informações">
          <InformatiosWrapper>
            <Information>
              <strong>Nome:</strong>
              <div>Maria Clara</div>
            </Information>
            <Information>
              <strong>Email:</strong>
              <div>mariaclara@gmail.com</div>
            </Information>
          </InformatiosWrapper>
        </PageSection>
      </Wrapper>
    </ProfilePageContainer>
  );
};
