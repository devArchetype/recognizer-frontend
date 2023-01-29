import { toast } from 'react-toastify';
import { recognizerApi } from '../instances';
import { Exams } from '../../../@types/app';

export const createExam = async (
  name: string,
  date: Date,
  description: string,
  updatedAnsers: object[],
  groupId: string | undefined
) => {
  try {
    const response = await recognizerApi.post('/exam/store', {
      name,
      date,
      description,
      updatedAnsers,
      groupId,
    });

    const { success, message } = response.data;

    if (message) {
      toast.error(message);
    }

    if (success) {
      toast.success(success);
    }
  } catch (e) {
    console.log(e);
  }
};

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
