import {
  ExamPageContainer,
  StatisticsgContainer,
  AnswersContainer,
} from './styles';

import { Template } from '../../components/Template';

export const Exam = () => {
  return (
    <ExamPageContainer heading="Exam">
      <StatisticsgContainer>
        <h2>Result</h2>

        <div className="statistics">
          <p>
            Total number of questions: <span>12</span>
          </p>
          <p>
            Right questions: <span className="right">10</span>
          </p>
          <p>
            Wrong questions: <span className="wrong">2</span>
          </p>
        </div>
      </StatisticsgContainer>

      <AnswersContainer>
        <h2>Answers</h2>

        <Template exam={13} empty={false} />
      </AnswersContainer>
    </ExamPageContainer>
  );
};
