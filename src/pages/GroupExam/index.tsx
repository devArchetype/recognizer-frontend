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
import examsData from './data.json';
import { DateDetailsContent, ExamsList, ExamsPageContainer } from './styles';
import {
  getExam,
  getMembers,
  deleteExam,
} from '../../services/axios/requests/exam';
import { useQuery } from 'react-query';
import { AuthContext } from '../../contexts/AuthContext';
import { findCurrentGroup } from '../../utils/findDataInLocalStorage';
export const GroupExam = () => {
  const { groupId, examId } = useParams();
  const navigate = useNavigate();
  const { data: exam } = useQuery<typeof examsData>(
    'EXAM',
    () => getExam(examId),
    {}
  );

  const { data: membersData } = useQuery<any>(
    'MEMBERS',
    () => getMembers(examId),
    {}
  );

  const [filteredMembers, setFilteredMembers] = useState<any>([]);
  const hasFilteredMembers = filteredMembers.length !== 0;

  const membersListRef = useRef(null);

  const { groups } = useContext(AuthContext);
  const groupName = findCurrentGroup(groups, groupId ?? '');

  const examsDataToUse = membersData || examsData;

  const examDateFormat = new Date(exam?.examDate);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const DateFormated = examDateFormat.toLocaleDateString('pt-BR', options);

  useEffect(() => {
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
              trigger={<Button type="button" label={'Imprimir provas'} />}
              modal={<PrintExamsMembersModal />}
            />
            <ModalTrigger
              trigger={<Button type="button" label={'Inserir provas'} />}
              modal={<UploadExamsModal />}
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
              itemsList={examsDataToUse}
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
            ? filteredMembers.map(({ id, name, externalId }) => {
                return (
                  <MemberCard
                    key={id}
                    name={name}
                    memberId={externalId}
                    target={`/grupos/${groupId}/${examId}/${externalId}/`}
                  />
                );
              })
            : examsDataToUse.map(({ id, name, externalId }) => {
                return (
                  <MemberCard
                    key={id}
                    name={name}
                    memberId={externalId}
                    target={`/grupos/${groupId}/${examId}/${externalId}/`}
                  />
                );
              })}
        </ExamsList>
      </PageSection>
    </ExamsPageContainer>
  );
};
