import { FilePlus, UserPlus } from 'phosphor-react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { PageSection } from '../../layouts/PageSection';
import {
  ExamSection,
  GroupPageContainer,
  GroupsMembers,
  GroupsTest,
} from './styles';

import { useState } from 'react';
import { ExamCard } from '../../components/Cards/ExamCard';
import { MemberCard } from '../../components/Cards/MemberCard';
import { FilterField } from '../../components/FilterField';
import { AddMemberModal } from '../../components/Modals/AddMemberModal';
import { CreateExamModal } from '../../components/Modals/CreateExamModal';
import { ModalTrigger } from '../../components/base/BaseModal';
import { integrantes, provas } from './data.json';

export const Group = () => {
  const { groupId } = useParams();
  const [filteredExams, setFilteredExams] = useState<typeof provas>([]);
  const [filteredMembers, setFilteredMembers] = useState<typeof integrantes>(
    []
  );

  const hasFilteredMembers = filteredMembers.length !== 0;
  const hasFilteredExams = filteredExams.length !== 0;

  return (
    <GroupPageContainer heading="Grupo A">
      <ExamSection
        heading="Provas"
        actions={
          <>
            <FilterField
              placeholder="Filtrar provas"
              itemsList={provas}
              onFilter={setFilteredExams}
              filter="name"
            />

            <ModalTrigger
              trigger={<Button label={'Criar Prova'} icon={<FilePlus />} />}
              modal={<CreateExamModal />}
            />
          </>
        }
      >
        <GroupsTest>
          {hasFilteredExams
            ? filteredExams.map(({ id, name, test }) => {
                return (
                  <ExamCard key={id} id={id} groupId={groupId!} name={name} />
                );
              })
            : provas.map(({ id, name, test }) => {
                return (
                  <ExamCard key={id} id={id} groupId={groupId!} name={name} />
                );
              })}
        </GroupsTest>
      </ExamSection>
      <PageSection
        heading="Integrantes"
        actions={
          <>
            <FilterField
              placeholder="Filtrar integrantes"
              itemsList={integrantes}
              onFilter={setFilteredMembers}
              filter="name"
            />

            <ModalTrigger
              trigger={<Button label={'Novo integrante'} icon={<UserPlus />} />}
              modal={<AddMemberModal />}
            />
          </>
        }
      >
        <GroupsMembers>
          {hasFilteredMembers
            ? filteredMembers.map(({ id, name, registration }) => {
                return (
                  <MemberCard key={id} name={name} memberId={registration} />
                );
              })
            : integrantes.map(({ id, name, registration }) => {
                return (
                  <MemberCard key={id} name={name} memberId={registration} />
                );
              })}
        </GroupsMembers>
      </PageSection>
    </GroupPageContainer>
  );
};
