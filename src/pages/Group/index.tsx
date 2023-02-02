import autoAnimate from '@formkit/auto-animate';
import { FilePlus, Trash, UserPlus } from 'phosphor-react';
import { useContext, useEffect, useRef, useState } from 'react';
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
import { getExams } from '../../services/axios/requests/exams';
import { Exams, Members } from '../../@types/app';
import { getMembers } from '../../services/axios/requests/members';
import { findCurrentGroup } from '../../utils/findDataInLocalStorage';
import { AuthContext } from '../../contexts/AuthContext';

export const Group = () => {
  const navigate = useNavigate();
  const { groups } = useContext(AuthContext);
  const { groupId } = useParams();
  const heading = findCurrentGroup(groups, groupId ?? '');

  const [members, setMembers] = useState<Members[]>([]);
  const [exams, setExams] = useState<Exams[]>([]);

  const loadExams = async () => {
    setExams(await getExams(groupId));
  };

  const loadMembers = async () => {
    setMembers(await getMembers(groupId));
  };

  useEffect(() => {
    loadExams();
    loadMembers();
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
    <GroupPageContainer heading={heading}>
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
              modal={<CreateExamModal reload={loadExams} />}
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
      <PageSection
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
              modal={<AddMemberModal reload={loadMembers} />}
            />
          </>
        }
      >
        <GroupsMembers ref={membersListRef}>
          {hasFilteredMembers
            ? filteredMembers.map(({ id, name, externalId }) => {
              return (
                <MemberCard
                  key={id}
                  name={name}
                  memberId={externalId || id}
                />
              );
            })
            : members.map(({ id, name, externalId }) => {
              return (
                <MemberCard
                  key={id}
                  name={name}
                  memberId={externalId || id}
                />
              );
            })}
        </GroupsMembers>
      </PageSection>
    </GroupPageContainer>
  );
};
