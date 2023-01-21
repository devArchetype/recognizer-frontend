import { Button } from '../../components/Button';
import { Template } from '../../components/Template';
import { PageSection } from '../../layouts/PageSection';
import { ExamPageContainer, StatisticsContainer } from './styles';

export const MemberExam = () => {
  const examName = 'Prova A';
  const examined = 'Joãozinho Batata';

  const totalQuestions = 20;
  const right = 10;
  const wrong = 10;
  const heading = examName + ' - ' + examined;

  return (
    <ExamPageContainer heading={heading}>
      <PageSection
        heading="Resultado"
        actions={<Button type="button" label={'Conferir prova'} />}
      >
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
