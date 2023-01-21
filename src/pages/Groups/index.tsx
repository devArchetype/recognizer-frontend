import { MagnifyingGlass, PlusCircle, User } from 'phosphor-react';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { PageSection } from '../../layouts/PageSection';
import { GroupsList, GroupsPageContainer } from './styles';

import { Group } from '../../@types/app';
import { Card } from '../../components/Card';
import { ModalTrigger } from '../../layouts/BaseModal';
import { CreateGroupModal } from '../../layouts/Modals/CreateGroupModal';
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
            return (
              <Card
                key={id}
                heading={name}
                target={`/grupos/${id}/`}
                label="Ver grupo"
                content={
                  <>
                    <div>
                      <User />
                      <span>{members}</span>
                    </div>
                    <div>
                      <User />
                      <span>{members}</span>
                    </div>
                  </>
                }
              />
            );
          })}
        </GroupsList>
      </PageSection>
    </GroupsPageContainer>
  );
};
