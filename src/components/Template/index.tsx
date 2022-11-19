import { TemplateSection } from './styles';
import { Question } from './components/Question';

interface TemplateProps {
  data?: object[];
  empty: boolean;
}

export const Template = ({ data, empty }: TemplateProps) => {
  const dataExample = [];
  for (let i = 1; i <= 5; i++) {
    dataExample.push({
      number: i,
      isRight: 'A',
      marked: 'A',
      alternatives: ['A', 'B', 'C', 'D', 'E'],
    });
    dataExample.push({
      number: i,
      isRight: 'B',
      marked: 'C',
      alternatives: ['A', 'B', 'C', 'D', 'E'],
    });
    dataExample.push({
      number: i,
      isRight: 'E',
      marked: 'E',
      alternatives: ['A', 'B', 'C', 'D', 'E'],
    });
    dataExample.push({
      number: i,
      isRight: 'C',
      marked: 'D',
      alternatives: ['A', 'B', 'C', 'D', 'E'],
    });
  }

  const questions = dataExample.map(function (question, index) {
    return <Question question={question} empty={empty} key={index} />;
  });

  return <TemplateSection>{questions}</TemplateSection>;
};
