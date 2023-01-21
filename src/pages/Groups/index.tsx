import autoAnimate from '@formkit/auto-animate';
import { PlusCircle } from 'phosphor-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../../components/Button';
import { GroupCard } from '../../components/Cards/GroupCard';
import { FilterField } from '../../components/FilterField';
import { CreateGroupModal } from '../../components/Modals/CreateGroupModal';
import { ModalTrigger } from '../../components/base/BaseModal';
import { PageSection } from '../../layouts/PageSection';
import groupsData from './data.json';
import { GroupsList, GroupsPageContainer } from './styles';

export const Groups = () => {
  const [filteredGroups, setFilteredGroups] = useState<typeof groupsData>([]);
  const hasFilteredGroups = filteredGroups.length !== 0;

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
              itemsList={groupsData}
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
          {hasFilteredGroups
            ? filteredGroups.map(({ id, name, members, exams }) => {
                return (
                  <GroupCard
                    key={id}
                    id={id}
                    name={name}
                    membersAmount={members}
                    examsAmount={exams}
                  />
                );
              })
            : groupsData.map(({ id, name, members, exams }) => {
                return (
                  <GroupCard
                    key={id}
                    id={id}
                    name={name}
                    membersAmount={members}
                    examsAmount={exams}
                  />
                );
              })}
        </GroupsList>
      </PageSection>
    </GroupsPageContainer>
  );
};
