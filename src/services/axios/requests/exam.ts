import { toast } from 'react-toastify';

import { recognizerApi } from '../instances';

export const getExam = async (examId: any) => {
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
export const getMembers = async (examId: any) => {
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
