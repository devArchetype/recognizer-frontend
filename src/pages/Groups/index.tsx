import autoAnimate from '@formkit/auto-animate';
import { PlusCircle } from 'phosphor-react';
import { useContext, useEffect, useRef, useState } from 'react';
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
import { AuthContext } from '../../contexts/AuthContext';

export const Groups = () => {
  const { setGroups } = useContext(AuthContext);
  const [filteredGroups, setFilteredGroups] = useState<Group[]>([]);
  const hasFilteredGroups = filteredGroups.length !== 0;
  const [groupsList, setGroupsList] = useState<Group[]>([]);

  const loadGroups = async () => {
    const groups = await getGroups();
    setGroupsList(groups);
    setGroups(groups);
  };

  useEffect(() => {
    loadGroups();
  }, []);

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
              itemsList={groupsList || []}
              onFilter={setFilteredGroups}
              filter="name"
            />
            <ModalTrigger
              trigger={<Button label={'Novo grupo'} icon={<PlusCircle />} />}
              modal={<CreateGroupModal reload={loadGroups} />}
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
          ) : groupsList ? (
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
