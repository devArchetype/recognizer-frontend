import { useEffect, useState } from 'react';
import { Template } from '../../components/Template';
import { PageSection } from '../../layouts/PageSection';
import { ExamPageContainer, StatisticsContainer } from './styles';
import { Answers, Exams, Members } from '../../@types/app';
import { getAnswer } from '../../services/axios/requests/answers';
import { useParams } from 'react-router-dom';

export const MemberExam = () => {
  const { answerId } = useParams();
  const [answer, setAnswer] = useState<Answers>({} as Answers);
  const [exams, setExams] = useState<Exams>({} as Exams);
  const [member, setMember] = useState<Members>({} as Members);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [rights, setRights] = useState(0);
  const [wrongs, setWrongs] = useState(0);

  useEffect(() => {
    (async () => {
      const answer: Answers = await getAnswer(answerId);
      setAnswer(answer);
      setExams(answer.Exams);
      setMember(answer.Members);
      setTotalQuestions(JSON.parse(answer.Exams.template).length);
      rightsAndWrongs(answer.template, answer.Exams.template);
    })();
  }, []);

  const rightsAndWrongs = (answerTemplate: string, examsTemplate: string) => {
    const template = JSON.parse(answerTemplate);
    const exam = JSON.parse(examsTemplate);

    let rightNumber = 0;
    let wrongsNumber = 0;

    for (const question of exam) {
      const key = Number(question.number) + 1;
      const answer = template[key];

      if (answer && answer === question.answer) ++rightNumber;
      else ++wrongsNumber;
    }

    setRights(rightNumber);
    setWrongs(wrongsNumber);
  };

  return (
    <ExamPageContainer heading={exams.name + ' - ' + member.name}>
      <PageSection heading="Resultado">
        <StatisticsContainer>
          <p>
            Total de questões: &nbsp;<span>{totalQuestions}</span>
          </p>
          <p>
            Acertos: &nbsp;<span className="right">{rights}</span>
          </p>
          <p>
            Erros: &nbsp;<span className="wrong">{wrongs}</span>
          </p>
        </StatisticsContainer>
      </PageSection>

      <PageSection heading="Gabarito">
        <Template
          empty={false}
          answer={answer.template}
          template={exams.template}
        />
      </PageSection>
    </ExamPageContainer>
  );
};
