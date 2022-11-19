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
        <h2>Result</h2>

        <StatisticsContainer>
          <p>
            Total number of questions: <span>{totalQuestions}</span>
          </p>
          <p>
            Right questions: <span className="right">{right}</span>
          </p>
          <p>
            Wrong questions: <span className="wrong">{wrong}</span>
          </p>
        </StatisticsContainer>
      </CardExam>

      <CardExam>
        <h2>Answers</h2>

        <Template empty={false} />
      </CardExam>
    </ExamPageContainer>
  );
};
