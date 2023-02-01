import { Printer } from 'phosphor-react';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Exams } from '../../@types/app';
import { Button } from '../../components/Button';
import { Loading } from '../../components/Loading';
import { PrintTemplate } from '../../components/PrintTemplate';
import { AuthContext } from '../../contexts/AuthContext';
import { getExam } from '../../services/axios/requests/exam';
import {
  Container,
  PrintContainer,
  PrintExamContainer,
  PrintMessage,
} from './styles';

export const PrintExam = () => {
  const { membersExamPrint, user } = useContext(AuthContext);
  const { examId } = useParams();

  const fetchExamData = () => {
    return getExam(examId);
  };

  const { data: examData, isLoading } = useQuery<Exams>(
    'EXAM_DATA',
    fetchExamData
  );
  const hasExamAndMembers = !isLoading && examData;

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
      {hasExamAndMembers ? (
        <PrintContainer>
          {membersExamPrint.map(({ id, name, externalId = id }) => {
            return (
              <PrintTemplate
                key={id}
                memberId={externalId}
                memberName={name}
                questionsAmount={JSON.parse(examData.template).length}
                answersAmount={5}
                examDate={new Date(examData.examDate)}
                examName={examData.name}
                userName={user.name}
              />
            );
          })}
        </PrintContainer>
      ) : (
        <Loading />
      )}
    </PrintExamContainer>
  );
};
