import { toast } from 'react-toastify';
import { Group } from '../../../@types/app';
import { recognizerApi } from '../instances';

export const getGroups = async (): Promise<Group[]> => {
  try {
    const response = await recognizerApi.get('/group/show');
    const { success, message, groups } = response.data;

    if (message) {
      toast.error(message);
    }

    if (success) {
      return groups;
    }
  } catch (e) {
    console.log(e);
  }

  return [];
};

export const createGroup = async (groupName: string) => {
  try {
    const response = await recognizerApi.post('/group/store', {
      name: groupName,
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

export const deleteGroup = async (groupId: string): Promise<boolean> => {
  try {
    const response = await recognizerApi.delete('/group/delete', {
      data: {
        id: groupId,
      },
    });

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
