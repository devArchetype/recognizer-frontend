import {
  QuestionContainer,
  NumberContainer,
  NumberText,
  NumberTextShort,
} from './styles';

import { Alternative } from '../Alternative';
import { QuestionType } from '../..';

export interface QuestionProps {
  question: QuestionType;
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
