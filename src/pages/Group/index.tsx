import { MagnifyingGlass, PlusCircle, User } from 'phosphor-react';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { PageSection } from '../../layouts/PageSection';
import {
  ExamSection,
  GroupPageContainer,
  GroupsTest,
  GroupsMembers,
} from './styles';

import { Card } from '../../components/Card';
import * as classes from './data.json';

export const Group = () => {
  const provas = classes.provas;
  const integrantes = classes.integrantes;

  return (
    <GroupPageContainer heading="Grupo A">
      <ExamSection
        heading="Provas"
        actions={
          <>
            <InputField
              label={'Filtrar provas'}
              placeholder={'Filtrar provas'}
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
                target="/grupos/provas"
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
              placeholder={'Buscar Integrante'}
              srLabel
              icon={<MagnifyingGlass />}
            />
            <Button label={'Adicionar integrante'} icon={<PlusCircle />} />
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
