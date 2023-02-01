import { TemplateSection } from './styles';
import { Question, QuestionProps } from './components/Question';

interface TemplateProps {
  answer: string;
  template: string;
  empty: boolean;
}

export interface QuestionType {
  number: number;
  isRight: string;
  marked: string;
  alternatives: string[];
}

export const Template = ({ answer, template, empty }: TemplateProps) => {
  const getTemplate = () => {
    const questions: QuestionType[] = [];

    if (answer && template) {
      const templateQuestions = JSON.parse(answer);
      const exam = JSON.parse(template);

      for (const question of exam) {
        const key = Number(question.number) + 1;
        const answer = templateQuestions[key];

        questions.push({
          number: key,
          isRight: question.answer,
          marked: answer,
          alternatives: ['A', 'B', 'C', 'D', 'E'],
        } as QuestionType);
      }
    }

    return questions;
  };

  const questions = getTemplate().map((question, index) => {
    return (
      <Question question={question as QuestionType} empty={empty} key={index} />
    );
  });

  return <TemplateSection>{questions}</TemplateSection>;
};
