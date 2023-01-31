import { HomeBaseSection } from '../../../../layouts/HomeBaseSection';
import { DescriptionContainer, SectionContainer } from './styles';

export const AboutSection = () => {
  return (
    <HomeBaseSection
      id="about"
      heading="Sobre"
      description="	A correção de provas se torna uma atividade essencialmente trabalhosa, 
      incluindo para as avaliações de múltipla escolha, que são menos complicadas que as dissertativas, 
      ao qual é preciso investir bastante tempo. Nesse contexto, o Recognizer, leitor de gabarito/gerenciador de correções de provas, 
      pode mudar o panorama."
    >
      <DescriptionContainer>
        <SectionContainer>
          <img
            src="/images/blood-report.svg"
            alt="Prova com escritos e símbolo de A+"
          />
          <p>
            Com essa aplicação, o gabarito pode ser gerado e, posteriormente,
            digitalizado para a correção, evitando assim que o processo seja
            feito de forma manual.
          </p>
        </SectionContainer>

        <SectionContainer className="text-right">
          <img src="/images/frame-6-1.svg" alt="Bloco de notas" />
          <p>
            Além disso, a plataforma propõe-se a fornecer, aos utilizadores, uma
            interface para o gerenciamento de tais correções, disponibilizando
            opções de organização, bem como método de identificação de
            participantes de tal avaliação. Desse modo, provendo mais uma
            funcionalidade, agora voltada para o aspecto gerencial, que faz o
            manual virar digital, o demorado se tornar ágil, o sinônimo de
            correção de provas ser Recognizer
          </p>
        </SectionContainer>

        <SectionContainer>
          <img
            src="/images/saly-42.svg"
            alt="Computador com números binarios sendo exibidos na tela"
          />
          <p>
            Dessa maneira abre uma série de possibilidades aos usuários, que
            podem usar o tempo restante para outras atividades mais importantes
            ou até mesmo para seu descanso e lazer, contando com uma ferramenta
            que mantém uma constante precisão.
          </p>
        </SectionContainer>
      </DescriptionContainer>
    </HomeBaseSection>
  );
};
