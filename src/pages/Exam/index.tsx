import { ExamPageContainer, CardExam, StatisticsContainer } from './styles';

import { Template } from '../../components/Template';

interface ExamProps {
  exam?: number;
  examName: string;
  examined: string;
}

export const Exam = ({ exam, examName, examined }: ExamProps) => {
  // illustrative data
  const totalQuestions = 20;
  const right = 10;
  const wrong = 10;
  const heading = examName + ' - ' + examined;

  return (
    <ExamPageContainer heading={heading}>
      <CardExam>
        <h2>Resultado</h2>

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
      </CardExam>

      <CardExam>
        <h2>Gabarito</h2>

        <Template empty={false} />
      </CardExam>
    </ExamPageContainer>
  );
};
