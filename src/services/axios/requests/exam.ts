import { toast } from 'react-toastify';

import { recognizerApi } from '../instances';
import { Answers, Members } from '../../../@types/app';

export const getExam = async (examId: string | undefined) => {
  try {
    const response = await recognizerApi.get('/exam/show/' + examId);

    const { success, exam } = response.data;
    if (success) {
      return exam;
    } else {
      toast.error('Erro ao carregar prova');
      return [];
    }
  } catch (e) {
    console.log(e);
  }
};

export const getMembers = async (examId: string | undefined) => {
  try {
    const response = await recognizerApi.get('/exam/members/' + examId);

    const { success, members } = response.data;
    if (success) {
      return members;
    } else {
      toast.error('Erro ao carregar membros da prova');
      return [];
    }
  } catch (e) {
    console.log(e);
  }
};

export const getMembersWithAnswers = async (examId: string | undefined) => {
  try {
    const response = await recognizerApi.get(
      '/members/showWithAnswers/' + examId
    );

    const { success, members } = response.data;

    const membersFilter: Members[] = [];
    for (const member of members) {
      const answerId = member.Answers.filter((answer: Answers) => {
        if (answer.examsId === examId) return answer.id;
      });

      member.answerId = answerId[0] && answerId[0].id;
      membersFilter.push(member);
    }

    console.log(membersFilter);

    if (success) {
      return membersFilter;
    } else {
      toast.error('Erro ao carregar membros da prova');
      return [];
    }
  } catch (e) {
    console.log(e);
  }
};

export const deleteExam = async (id: string): Promise<boolean> => {
  try {
    const response = await recognizerApi.delete('/exam/delete/' + id);

    const { success, message } = response.data;

    if (message) {
      toast.error(message);
    }

    if (success) {
      toast.success(success);
      return true;
    }
  } catch (e) {
    console.log(e);
  }

  return false;
};
