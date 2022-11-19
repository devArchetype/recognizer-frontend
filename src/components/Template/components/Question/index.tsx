import {
  QuestionContainer,
  NumberContainer,
  NumberText,
  NumberTextShort,
} from './styles';

import { Alternative } from '../Alternative';

export interface QuestionProps {
  question: {
    number: number,
    isRight: string,
    marked: string,
    alternatives: string[],
  };
  empty: boolean;
}

export const Question = ({ question, empty }: QuestionProps) => {
  return (
    <QuestionContainer>
      <NumberContainer>
        <NumberText>Question {question.number}</NumberText>
        <NumberTextShort>Ex.</NumberTextShort>
      </NumberContainer>

      <Alternative question={question} empty={empty} />
    </QuestionContainer>
  );
};
