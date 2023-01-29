import { BaseModal } from '../../base/BaseModal';
import { useParams } from 'react-router-dom';
import { Question } from '../../Template/components/Question';
import { getExam } from '../../../services/axios/requests/exam';
import { useQuery } from 'react-query';


export const CheckExamTemplateModal = () => {
  const { groupId, examId } = useParams();
  const dataExample = [];

  const {
    data: exam,
    isFetching,
    isError
  } = useQuery<any>('EXAM', () => getExam(examId), {});

  const awnsers = JSON.parse(exam?.template ?? '');
  for (let i = 0; i < awnsers.length; i++) {
    dataExample.push({
      number: awnsers[i].number,
      isRight:  awnsers[i].answer,
      marked: awnsers[i].answer,
      alternatives: ['A', 'B', 'C', 'D', 'E'],
    });
  }
  const questions = dataExample.map(function (question, index) {
    return <Question question={question} empty={false} key={index} />;
 });

  return (
    <BaseModal heading="Gabarito da prova" cancelButtonLabel='false' saveButtonLabel='false'>
      <p>Prova: {exam?.name}</p>
      <br/>
      <p>
        {questions}
      </p>
    </BaseModal>
  );
};
