import { Group } from '../@types/app';

export const findCurrentGroup = (groups: Group[], groupId: string) => {
  const group = groups.filter((group) => group.id === groupId)[0] || null;

  if (!group) return 'Grupo';
  return group.name;
};
