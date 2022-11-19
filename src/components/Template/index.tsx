import { TemplateSection } from './styles';
import { Question } from './components/Question';

interface TemplateProps {
  exam?: number;
  empty: boolean;
}

export const Template = ({ exam, empty }: TemplateProps) => {
  const data = [
    {
      number: 1,
      isRight: 'B',
      marked: 'A',
      alternatives: ['A', 'B', 'C', 'D', 'E'],
    },
    {
      number: 2,
      isRight: 'E',
      marked: 'E',
      alternatives: ['A', 'B', 'C', 'D', 'E'],
    },
    {
      number: 3,
      isRight: 'A',
      marked: 'D',
      alternatives: ['A', 'B', 'C', 'D', 'E'],
    },
    {
      number: 4,
      isRight: 'E',
      marked: 'C',
      alternatives: ['A', 'B', 'C', 'D', 'E'],
    },
  ];

  const questions = data.map(function (question, index) {
    return <Question question={question} empty={empty} key={index} />;
  });

  return <TemplateSection>{questions}</TemplateSection>;
};
