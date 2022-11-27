import { ExamPageContainer, StatisticsContainer } from './styles';

import { Template } from '../../components/Template';
import { PageSection } from '../../components/layouts/PageSection';

export const Exam = () => {
  // illustrative data
  const examName = 'Prova A';
  const examined = 'Joãozinho Batata';

  const totalQuestions = 20;
  const right = 10;
  const wrong = 10;
  const heading = examName + ' - ' + examined;

  return (
    <ExamPageContainer heading={heading}>
      <PageSection heading="Resultado">
        <StatisticsContainer>
          <p>
            Total de questões: &nbsp;<span>{totalQuestions}</span>
          </p>
          <p>
            Acertos: &nbsp;<span className="right">{right}</span>
          </p>
          <p>
            Erros: &nbsp;<span className="wrong">{wrong}</span>
          </p>
        </StatisticsContainer>
      </PageSection>

      <PageSection heading="Gabarito">
        <Template empty={false} />
      </PageSection>
    </ExamPageContainer>
  );
};
