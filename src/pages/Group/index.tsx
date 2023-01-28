import autoAnimate from '@formkit/auto-animate';
import { FilePlus, Trash, UserPlus } from 'phosphor-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { ExamCard } from '../../components/Cards/ExamCard';
import { MemberCard } from '../../components/Cards/MemberCard';
import { FilterField } from '../../components/FilterField';
import { AddMemberModal } from '../../components/Modals/AddMemberModal';
import { CreateExamModal } from '../../components/Modals/CreateExamModal';
import { ModalTrigger } from '../../components/base/BaseModal';
import { PageSection } from '../../layouts/PageSection';
import { deleteGroup } from '../../services/axios/requests/groups';

import {
  ExamSection,
  GroupPageContainer,
  GroupsMembers,
  GroupsTest,
} from './styles';
import { getExams } from '../../services/axios/requests/group';
import { Exams, Members } from '../../@types/app';

export const Group = () => {
  const navigate = useNavigate();
  const { groupId } = useParams();

  const [members, setMembers] = useState<Members[]>([]);
  const [exams, setExams] = useState<Exams[]>([]);

  useEffect(() => {
    (async () => {
      setExams(await getExams(groupId));
    })();
  }, []);

  const [filteredExams, setFilteredExams] = useState<Exams[]>([]);
  const [filteredMembers, setFilteredMembers] = useState<Members[]>([]);

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

  const handleDeleteGroup = () => {
    deleteGroup(groupId!).then((deleted) => {
      deleted && navigate('/grupos');
    });
  };

  return (
    <GroupPageContainer heading="Grupo A">
      <ExamSection
        heading="Provas"
        actions={
          <>
            <FilterField
              placeholder="Filtrar provas"
              itemsList={exams}
              onFilter={setFilteredExams}
              filter="name"
            />

            <ModalTrigger
              trigger={<Button label={'Criar Prova'} icon={<FilePlus />} />}
              modal={<CreateExamModal />}
            />
            <Button
              label={'Apagar grupo'}
              icon={<Trash />}
              onClick={handleDeleteGroup}
              confirm
            />
          </>
        }
      >
        <GroupsTest ref={examsListRef}>
          {hasFilteredExams
            ? filteredExams.map(({ id, name, groupId, _count, examDate }) => {
                return (
                  <ExamCard
                    key={id}
                    id={id}
                    groupId={groupId!}
                    name={name}
                    membersAmount={_count.MembersHasExams}
                    examDate={String(examDate)}
                  />
                );
              })
            : exams.map(({ id, name, groupId, _count, examDate }) => {
                return (
                  <ExamCard
                    key={id}
                    id={id}
                    groupId={groupId!}
                    name={name}
                    membersAmount={_count.MembersHasExams}
                    examDate={String(examDate)}
                  />
                );
              })}
        </GroupsTest>
      </ExamSection>
      {/* <PageSection
        heading="Integrantes"
        actions={
          <>
            <FilterField
              placeholder="Filtrar integrantes"
              itemsList={members}
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
            : members.map(({ id, name, registration }) => {
                return (
                  <MemberCard key={id} name={name} memberId={registration} />
                );
              })}
        </GroupsMembers>
      </PageSection> */}
    </GroupPageContainer>
  );
};
