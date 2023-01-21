import autoAnimate from '@formkit/auto-animate';
import { FilePlus, UserPlus } from 'phosphor-react';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { ExamCard } from '../../components/Cards/ExamCard';
import { MemberCard } from '../../components/Cards/MemberCard';
import { FilterField } from '../../components/FilterField';
import { AddMemberModal } from '../../components/Modals/AddMemberModal';
import { CreateExamModal } from '../../components/Modals/CreateExamModal';
import { ModalTrigger } from '../../components/base/BaseModal';
import { PageSection } from '../../layouts/PageSection';
import { integrantes, provas } from './data.json';
import {
  ExamSection,
  GroupPageContainer,
  GroupsMembers,
  GroupsTest,
} from './styles';

export const Group = () => {
  const { groupId } = useParams();
  const [filteredExams, setFilteredExams] = useState<typeof provas>([]);
  const [filteredMembers, setFilteredMembers] = useState<typeof integrantes>(
    []
  );

  const hasFilteredMembers = filteredMembers.length !== 0;
  const hasFilteredExams = filteredExams.length !== 0;

  const membersListRef = useRef(null);
  const examsListRef = useRef(null);

  useEffect(() => {
    membersListRef.current && autoAnimate(membersListRef.current);
  }, [membersListRef]);

  useEffect(() => {
    examsListRef.current && autoAnimate(examsListRef.current);
  }, [examsListRef]);

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
        <GroupsTest ref={examsListRef}>
          {hasFilteredExams
            ? filteredExams.map(({ id, name, members, date }) => {
                return (
                  <ExamCard
                    key={id}
                    id={id}
                    groupId={groupId!}
                    name={name}
                    membersAmount={members}
                    examDate={date}
                  />
                );
              })
            : provas.map(({ id, name, members, date }) => {
                return (
                  <ExamCard
                    key={id}
                    id={id}
                    groupId={groupId!}
                    name={name}
                    membersAmount={members}
                    examDate={date}
                  />
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
        <GroupsMembers ref={membersListRef}>
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
