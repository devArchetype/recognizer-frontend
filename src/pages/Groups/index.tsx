import autoAnimate from '@formkit/auto-animate';
import { PlusCircle } from 'phosphor-react';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { Group } from '../../@types/app';
import { Button } from '../../components/Button';
import { GroupCard } from '../../components/Cards/GroupCard';
import { FilterField } from '../../components/FilterField';
import { Loading } from '../../components/Loading';
import { CreateGroupModal } from '../../components/Modals/CreateGroupModal';
import { ModalTrigger } from '../../components/base/BaseModal';
import { PageSection } from '../../layouts/PageSection';
import { getGroups } from '../../services/axios/requests/groups';
import { GroupsList, GroupsPageContainer } from './styles';

export const Groups = () => {
  const [filteredGroups, setFilteredGroups] = useState<Group[]>([]);
  const hasFilteredGroups = filteredGroups.length !== 0;

  const {
    data: groupsList,
    isFetching,
    // isError,
  } = useQuery<Group[]>('GROUPS_LIST', getGroups);

  const hasGroupsList = !isFetching && groupsList;
  const goupsListRef = useRef(null);

  useEffect(() => {
    goupsListRef.current && autoAnimate(goupsListRef.current);
  }, [goupsListRef]);

  return (
    <GroupsPageContainer heading="Grupos">
      <PageSection
        heading="Meus grupos"
        actions={
          <>
            <FilterField
              placeholder="Filtrar integrantes"
              itemsList={hasGroupsList ? groupsList : []}
              onFilter={setFilteredGroups}
              filter="name"
            />
            <ModalTrigger
              trigger={<Button label={'Novo grupo'} icon={<PlusCircle />} />}
              modal={<CreateGroupModal />}
            />
          </>
        }
      >
        <GroupsList ref={goupsListRef}>
          {hasFilteredGroups ? (
            filteredGroups.map(({ id, name, _count }) => {
              return (
                <GroupCard
                  key={id}
                  id={id}
                  name={name}
                  membersAmount={_count.GroupsHasMembers}
                  examsAmount={_count.Exams}
                />
              );
            })
          ) : hasGroupsList ? (
            groupsList.map(({ id, name, _count }) => {
              return (
                <GroupCard
                  key={id}
                  id={id}
                  name={name}
                  membersAmount={_count.GroupsHasMembers}
                  examsAmount={_count.Exams}
                />
              );
            })
          ) : (
            <Loading />
          )}
        </GroupsList>
      </PageSection>
    </GroupsPageContainer>
  );
};
