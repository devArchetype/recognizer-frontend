import {
  AIContainer,
  HeaderRow,
  PrintTemplateContainer,
  QuestionContainer,
  QuestionItem,
  TemplateBody,
  TemplateHeader,
} from './styles';

interface PrintTemplateProps {
  memberId: string;
  memberName: string;
  questionsAmount: number;
  answersAmount: number;
  examName: string;
  examDate: Date;
  userName: string;
}

export const PrintTemplate = ({
  memberId,
  memberName,
  questionsAmount,
  answersAmount,
  examName,
  examDate,
  userName,
}: PrintTemplateProps) => {
  const questions = Array.from(Array(questionsAmount).keys(), (n) => n + 1);
  const answers = Array.from(Array(answersAmount).keys());
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return (
    <PrintTemplateContainer>
      <TemplateHeader>
        <HeaderRow>
          <h2>{examName}</h2>
          <span>
            <strong>Data: </strong>
            <span>{new Intl.DateTimeFormat('pt-BR').format(examDate)}</span>
          </span>
        </HeaderRow>
        <HeaderRow>
          <span>
            <strong>Aplicador: </strong>
            {userName}
          </span>
        </HeaderRow>
        <HeaderRow>
          <span>
            <strong>Candidato: </strong>
            {memberName}
          </span>
        </HeaderRow>
        <HeaderRow>
          <strong>Assinatura: </strong>
          <div />
        </HeaderRow>
      </TemplateHeader>
      <AIContainer>
        <h2>{memberId}</h2>
        <TemplateBody>
          {questions.map((question) => {
            return (
              <QuestionContainer key={question}>
                <strong>{`${String(question).padStart(2, '0')}.`}</strong>
                {answers.map((answer) => {
                  return (
                    <QuestionItem key={answer}>{alphabet[answer]}</QuestionItem>
                  );
                })}
              </QuestionContainer>
            );
          })}
        </TemplateBody>
      </AIContainer>
    </PrintTemplateContainer>
  );
};
