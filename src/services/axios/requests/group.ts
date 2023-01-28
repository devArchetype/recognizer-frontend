import { toast } from 'react-toastify';
import { Exams } from '../../../@types/app';
import { recognizerApi } from '../instances';

export const getExams = async (
  groupId: string | undefined
): Promise<Exams[]> => {
  try {
    const response = await recognizerApi.get(`/exams/show/${groupId}`);
    const { success, message, exams } = response.data;

    if (message) {
      toast.error(message);
    }

    if (success) {
      return exams;
    }
  } catch (e) {
    console.log(e);
  }

  return [];
};
