import { PlusCircle } from 'phosphor-react';
import { Button } from '../../components/Button';
import { PageSection } from '../../layouts/PageSection';
import { GroupsList, GroupsPageContainer } from './styles';

import { useState } from 'react';
import { Group } from '../../@types/app';
import { GroupCard } from '../../components/Cards/GroupCard';
import { FilterField } from '../../components/FilterField';
import { CreateGroupModal } from '../../components/Modals/CreateGroupModal';
import { ModalTrigger } from '../../components/base/BaseModal';
import groupsData from './data.json';

export const Groups = () => {
  const [filteredGroups, setFilteredGroups] = useState<typeof groupsData>([]);
  const hasFilteredGroups = filteredGroups.length !== 0;

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
        <GroupsList>
          {hasFilteredGroups
            ? filteredGroups.map(({ id, name, members }: Group) => {
                return <GroupCard key={id} id={id} name={name} />;
              })
            : groupsData.map(({ id, name, members }: Group) => {
                return <GroupCard key={id} id={id} name={name} />;
              })}
          {}
        </GroupsList>
      </PageSection>
    </GroupsPageContainer>
  );
};
