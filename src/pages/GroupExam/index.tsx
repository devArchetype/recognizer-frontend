import autoAnimate from '@formkit/auto-animate';
import { Trash } from 'phosphor-react';
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { MemberCard } from '../../components/Cards/MemberCard';
import { FilterField } from '../../components/FilterField';
import { CheckExamTemplateModal } from '../../components/Modals/CheckExamTemplateModal';
import { UploadExamsModal } from '../../components/Modals/UploadExamsModal';
import { PrintExamsMembersModal } from '../../components/Modals/PrintExamsMembersModal';
import { ModalTrigger } from '../../components/base/BaseModal';
import { PageSection } from '../../layouts/PageSection';
import { DateDetailsContent, ExamsList, ExamsPageContainer } from './styles';
import {
  getExam,
  deleteExam,
  getMembersWithAnswers,
} from '../../services/axios/requests/exam';
import { useQuery } from 'react-query';
import { AuthContext } from '../../contexts/AuthContext';
import { findCurrentGroup } from '../../utils/findDataInLocalStorage';
import { Members } from '../../@types/app';

export const GroupExam = () => {
  const { groupId, examId } = useParams();
  const [membersData, setMembersData] = useState<Members[] | undefined>([]);
  const navigate = useNavigate();
  const { data: exam } = useQuery('EXAM', () => getExam(examId), {});

  const [filteredMembers, setFilteredMembers] = useState<Members[]>([]);
  const hasFilteredMembers = filteredMembers.length !== 0;

  const membersListRef = useRef(null);

  const { groups } = useContext(AuthContext);
  const groupName = findCurrentGroup(groups, groupId ?? '');

  const examDateFormat = new Date(exam?.examDate);
  const DateFormated = examDateFormat.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const loadMembers = async () => {
    setMembersData(await getMembersWithAnswers(examId));
  };

  useEffect(() => {
    loadMembers();

    membersListRef.current && autoAnimate(membersListRef.current);
  }, [membersListRef]);

  const examName = exam?.name;
  const group = groupName;
  const dateDetails = DateFormated;
  const description = exam?.description;

  const handleDeleteExam = () => {
    deleteExam(examId!).then((deleted) => {
      deleted && navigate('/grupos/' + groupId);
    });
  };

  return (
    <ExamsPageContainer heading={`${group} - ${examName}`}>
      <PageSection
        heading="Detalhes"
        actions={
          <>
            <ModalTrigger
              trigger={<Button type="button" label={'Imprimir Gabaritos'} />}
              modal={<PrintExamsMembersModal />}
            />
            <ModalTrigger
              trigger={<Button type="button" label={'Inserir Gabaritos'} />}
              modal={<UploadExamsModal reload={loadMembers} />}
            />
            <Button
              label={'Apagar Prova'}
              icon={<Trash />}
              onClick={handleDeleteExam}
              confirm
            />
          </>
        }
      >
        <DateDetailsContent>
          <h3>{dateDetails}</h3>
          <p>{description}</p>
        </DateDetailsContent>
      </PageSection>

      <PageSection
        heading="Resultados"
        actions={
          <>
            <FilterField
              placeholder="Filtrar integrantes"
              itemsList={membersData || []}
              onFilter={setFilteredMembers}
              filter="name"
            />
            <ModalTrigger
              trigger={<Button type="button" label={'Ver Gabarito'} />}
              modal={<CheckExamTemplateModal />}
            />
          </>
        }
      >
        <ExamsList ref={membersListRef}>
          {hasFilteredMembers
            ? filteredMembers.map(({ id, name, externalId, answerId }) => {
              return (
                <MemberCard
                  key={id}
                  name={name}
                  memberId={externalId ?? ''}
                  target={`/grupos/${groupId}/${examId}/${answerId}/`}
                />
              );
            })
            : membersData?.map(({ id, name, externalId, answerId }) => {
              return (
                <MemberCard
                  key={id}
                  name={name}
                  memberId={externalId ?? ''}
                  target={`/grupos/${groupId}/${examId}/${answerId}/`}
                />
              );
            })}
        </ExamsList>
      </PageSection>
    </ExamsPageContainer>
  );
};
