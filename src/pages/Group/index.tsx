import { MagnifyingGlass, PlusCircle } from 'phosphor-react';
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

import { ExamCard } from '../../components/Cards/ExamCard';
import { AddMemberModal } from '../../components/Modals/AddMemberModal';
import { CreateExamModal } from '../../components/Modals/CreateExamModal';
import { ModalTrigger } from '../../layouts/BaseModal';
import { integrantes, provas } from './data.json';
import { MemberCard } from '../../components/Cards/MemberCard';

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

            <ModalTrigger
              trigger={<Button label={'Criar Prova'} icon={<PlusCircle />} />}
              modal={<CreateExamModal />}
            />
          </>
        }
      >
        <GroupsTest>
          {provas.map(({ id, name, test }) => {
            return <ExamCard key={id} id={id} groupId={groupId!} name={name} />;
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

            <ModalTrigger
              trigger={
                <Button label={'Novo integrante'} icon={<PlusCircle />} />
              }
              modal={<AddMemberModal />}
            />
          </>
        }
      >
        <GroupsMembers>
          {integrantes.map(({ id, name, registration }) => {
            return <MemberCard key={id} name={name} memberId={registration} />;
          })}
        </GroupsMembers>
      </PageSection>
    </GroupPageContainer>
  );
};
