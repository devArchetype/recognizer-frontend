import { MagnifyingGlass, PlusCircle, User } from 'phosphor-react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { PageSection } from '../../layouts/PageSection';
import {
  ExamSection,
  GroupPageContainer,
  GroupsMembers,
  GroupsTest,
} from './styles';

import { Card } from '../../components/Card';
import { integrantes, provas } from './data.json';

export const Group = () => {
  const { groupId } = useParams();

  return (
    <GroupPageContainer heading="Grupo A">
      <ExamSection
        heading="Provas"
        actions={
          <>
            <InputField
              label={'Filtrar grupos'}
              placeholder={'Filtrar grupos'}
              srLabel
              icon={<MagnifyingGlass />}
            />
            <Button label={'Criar Prova'} icon={<PlusCircle />} />
          </>
        }
      >
        <GroupsTest>
          {provas.map(({ id, name, test }) => {
            return (
              <Card
                key={id}
                id={id}
                heading={name}
                label="Ver prova"
                target={`/grupos/${groupId}/provas/${id}/`}
                content={
                  <>
                    <div>
                      <User />
                      <span>{test}</span>
                    </div>
                    <div>
                      <User />
                      <span>{test}</span>
                    </div>
                  </>
                }
              />
            );
          })}
        </GroupsTest>
      </ExamSection>
      <PageSection
        heading="Integrantes"
        actions={
          <>
            <InputField
              label={'Filtrar integrantes'}
              placeholder={'Filtrar integrantes'}
              srLabel
              icon={<MagnifyingGlass />}
            />
            <Button label={'Novo integrante'} icon={<PlusCircle />} />
          </>
        }
      >
        <GroupsMembers>
          {integrantes.map(({ id, name, registration }) => {
            return (
              <Card
                key={id}
                id={id}
                hideBtn={true}
                heading={name}
                content={
                  <>
                    <div>
                      <span>{'Matrícula:'}</span>
                    </div>
                    <div>
                      <span>{registration}</span>
                    </div>
                  </>
                }
              />
            );
          })}
        </GroupsMembers>
      </PageSection>
    </GroupPageContainer>
  );
};
