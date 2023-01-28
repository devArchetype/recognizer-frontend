import { Printer } from 'phosphor-react';
import { Button } from '../../components/Button';
import { PrintTemplate } from '../../components/PrintTemplate';
import {
  Container,
  PrintContainer,
  PrintExamContainer,
  PrintMessage,
} from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const PrintExam = () => {
  const { membersExamPrint } = useContext(AuthContext);

  const data = {
    questionsAmount: 20,
    answersAmount: 5,
    examDate: new Date(),
    examName: 'II Prova GAAL',
    members: membersExamPrint,
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
        {data.members.map(({ id, name, externalId = id }) => {
          return (
            <PrintTemplate
              key={id}
              memberId={externalId}
              memberName={name}
              questionsAmount={data.questionsAmount}
              answersAmount={data.answersAmount}
              examDate={data.examDate}
              examName={data.examName}
              userName={name}
            />
          );
        })}
      </PrintContainer>
    </PrintExamContainer>
  );
};
