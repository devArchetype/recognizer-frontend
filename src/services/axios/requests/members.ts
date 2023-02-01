import { toast } from 'react-toastify';
import { recognizerApi } from '../instances';
import { Members } from '../../../@types/app';

export const createMembers = async (newMembers: [] | object) => {
  try {
    const response = await recognizerApi.post('/members/store', {
      newMembers,
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

export const getMembers = async (
  groupId: string | undefined
): Promise<Members[]> => {
  try {
    const response = await recognizerApi.get(`/members/show/${groupId}`);
    const { success, message, members } = response.data;
    console.log(response.data);

    if (message) {
      toast.error(message);
    }

    if (success) {
      return members;
    }
  } catch (e) {
    console.log(e);
  }

  return [];
};
