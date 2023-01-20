import { PrintTemplate } from '../../components/PrintTemplate';
import { Container } from './styles';

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

  return (
    <Container>
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
    </Container>
  );
};
