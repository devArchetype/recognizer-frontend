import { MagnifyingGlass, PlusCircle } from 'phosphor-react';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { PageSection } from '../../layouts/PageSection';
import { GroupsList, GroupsPageContainer } from './styles';

import { Group } from '../../@types/app';
import { GroupCard } from '../../components/Cards/GroupCard';
import { CreateGroupModal } from '../../components/Modals/CreateGroupModal';
import { ModalTrigger } from '../../components/base/BaseModal';
import groupsData from './data.json';

export const Groups = () => {
  return (
    <GroupsPageContainer heading="Grupos">
      <PageSection
        heading="Meus grupos"
        actions={
          <>
            <InputField
              label={'Filtrar grupos'}
              placeholder={'Filtrar grupos'}
              srLabel
              icon={<MagnifyingGlass />}
            />
            <ModalTrigger
              trigger={<Button label={'Novo grupo'} icon={<PlusCircle />} />}
              modal={<CreateGroupModal />}
            />
          </>
        }
      >
        <GroupsList>
          {groupsData.map(({ id, name, members }: Group) => {
            return <GroupCard key={id} id={id} name={name} />;
          })}
        </GroupsList>
      </PageSection>
    </GroupsPageContainer>
  );
};
