import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getExam } from '../../../services/axios/requests/exam';
import { Question } from '../../Template/components/Question';
import { BaseModal } from '../../base/BaseModal';

export const CheckExamTemplateModal = () => {
  const { examId } = useParams();
  const dataExample = [];

  const {
    data: exam,
    // isFetching,
    // isError,
  } = useQuery<any>('EXAM', () => getExam(examId), {});

  const awnsers = JSON.parse(exam?.template ?? '');
  for (let i = 0; i < awnsers.length; i++) {
    dataExample.push({
      number: Number(awnsers[i].number) + 1,
      isRight: awnsers[i].answer,
      marked: awnsers[i].answer,
      alternatives: ['A', 'B', 'C', 'D', 'E'],
    });
  }

  const questions = dataExample.map((question, index) => {
    return (
      <Question
        question={question}
        empty={false}
        key={index}
        borderRadius={false}
      />
    );
  });

  return (
    <BaseModal
      heading="Gabarito da prova"
      cancelButtonLabel="Cancel"
      saveButtonLabel="Save"
    >
      <p>Prova: {exam?.name}</p>
      <br />
      <p>{questions}</p>
    </BaseModal>
  );
};
