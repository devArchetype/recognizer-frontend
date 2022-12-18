import { MagnifyingGlass, PlusCircle, User } from 'phosphor-react';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { PageSection } from '../../components/layouts/PageSection';
import { GroupsList, GroupsPageContainer } from './styles';

import { Group } from '../../@types/app';
import { Card } from '../../components/Card';
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
            <Button label={'Novo grupo'} icon={<PlusCircle />} />
          </>
        }
      >
        <GroupsList>
          {groupsData.map(({ id, name, members }: Group) => {
            return (
              <Card
                key={id}
                id={id}
                heading={name}
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
