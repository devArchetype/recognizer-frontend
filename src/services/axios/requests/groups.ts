import { Group } from '../../../@types/app';
import { recognizerApi } from '../instances';

export const getGroups = async (): Promise<Group[]> => {
  const response = await recognizerApi.get('/group/show');

  const { success, groups } = response.data;
  return groups;
};

export const createGroup = async (groupName: string) => {
  const response = await recognizerApi.post('/group/store', {
    name: groupName,
  });
};

export const deleteGroup = async (groupId: string) => {
  const response = await recognizerApi.delete('/group/delete', {
    data: {
      id: groupId,
    },
  });
  const { success } = response.data;

  return success;
};
