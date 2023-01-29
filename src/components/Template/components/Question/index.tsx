import {
  QuestionContainer,
  NumberContainer,
  NumberText,
  NumberTextShort,
} from './styles';

import { Alternative } from '../Alternative';

export interface QuestionProps {
  question: {
    number: number;
    isRight: string;
    marked: string;
    alternatives: string[];
  };
  empty: boolean;
  borderRadius?: boolean;
}

export const Question = ({
  question,
  empty,
  borderRadius = true,
}: QuestionProps) => {
  return (
    <QuestionContainer borderRadius={borderRadius}>
      <NumberContainer>
        <NumberText>Questão {question.number}</NumberText>
        <NumberTextShort>Ex.</NumberTextShort>
      </NumberContainer>

      <Alternative question={question} empty={empty} />
    </QuestionContainer>
  );
};
