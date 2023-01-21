import { Printer } from 'phosphor-react';
import { Button } from '../../components/Button';
import { PrintTemplate } from '../../components/PrintTemplate';
import {
  Container,
  PrintContainer,
  PrintExamContainer,
  PrintMessage,
} from './styles';

export const PrintExam = () => {
  const data = {
    questionsAmount: 20,
    answersAmount: 5,
    examDate: new Date(),
    examName: 'II Prova GAAL',
    userName: 'Joãozinho Batata',
    members: [
      {
        id: '0000001',
        name: 'Aluno A',
      },
      {
        id: '0000002',
        name: 'Aluno B',
      },
      {
        id: '0000003',
        name: 'Aluno C',
      },
    ],
  };

  const handleDisplayPrintScreen = () => {
    window.print();
  };

  return (
    <PrintExamContainer heading="Imprimir prova">
      <Container>
        <PrintMessage>
          <Printer size={72} weight="thin" />
          <div>
            <p>Os gabaritos estão prontos para impressão!</p>
          </div>
          <Button
            label="Imprimir"
            variant="tertiary"
            onClick={handleDisplayPrintScreen}
          />
        </PrintMessage>
      </Container>
      <PrintContainer>
        {data.members.map(({ id, name }) => {
          return (
            <PrintTemplate
              key={id}
              memberId={id}
              memberName={name}
              questionsAmount={data.questionsAmount}
              answersAmount={data.answersAmount}
              examDate={data.examDate}
              examName={data.examName}
              userName={data.userName}
            />
          );
        })}
      </PrintContainer>
    </PrintExamContainer>
  );
};
