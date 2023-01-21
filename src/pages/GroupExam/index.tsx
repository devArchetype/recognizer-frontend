import autoAnimate from '@formkit/auto-animate';
import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { MemberCard } from '../../components/Cards/MemberCard';
import { FilterField } from '../../components/FilterField';
import { CheckExamTemplateModal } from '../../components/Modals/CheckExamTemplateModal';
import { ModalTrigger } from '../../components/base/BaseModal';
import { PageSection } from '../../layouts/PageSection';
import examsData from './data.json';
import { DateDetailsContent, ExamsList, ExamsPageContainer } from './styles';

export const GroupExam = () => {
  const { groupId, examId } = useParams();

  const [filteredMembers, setFilteredMembers] = useState<typeof examsData>([]);
  const hasFilteredMembers = filteredMembers.length !== 0;

  const membersListRef = useRef(null);

  useEffect(() => {
    membersListRef.current && autoAnimate(membersListRef.current);
  }, [membersListRef]);

  const examName = 'Prova A';
  const group = 'Grupo A';
  const dateDetails = '11 de Novembro de 2022';

  return (
    <ExamsPageContainer
      heading={examName + ' - ' + group}
      actions={
        <>
          <Link to={`/grupos/${groupId}/${examId}/imprimir`}>
            <Button type="button" label={'Imprimir provas'} />
          </Link>
          <Button type="button" label={'Inserir provas'} />
        </>
      }
    >
      <PageSection heading="Detalhes">
        <DateDetailsContent>
          <h3>{dateDetails}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            corporis quibusdam, quis quia iste aspernatur id eveniet nam quaerat
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            temporibus ratione odio, magni voluptatum rem suscipit pariatur
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            temporibus ratione odio, magni voluptatum rem suscipit pariatur
            corporis quibusdam, quis quia iste aspernatur id eveniet nam quaerat
            ipsam placeat sit.
          </p>
        </DateDetailsContent>
      </PageSection>

      <PageSection
        heading="Resultados"
        actions={
          <>
            <FilterField
              placeholder="Filtrar integrantes"
              itemsList={examsData}
              onFilter={setFilteredMembers}
              filter="name"
            />
            <ModalTrigger
              trigger={<Button type="button" label={'Ver Gabarito'} />}
              modal={<CheckExamTemplateModal />}
            />

            <Button type="button" label={'Exportar'} />
          </>
        }
      >
        <ExamsList ref={membersListRef}>
          {hasFilteredMembers
            ? filteredMembers.map(({ id, name, registration }) => {
                return (
                  <MemberCard
                    key={id}
                    name={name}
                    memberId={registration}
                    target={`/grupos/${groupId}/${examId}/${registration}/`}
                  />
                );
              })
            : examsData.map(({ id, name, registration }) => {
                return (
                  <MemberCard
                    key={id}
                    name={name}
                    memberId={registration}
                    target={`/grupos/${groupId}/${examId}/${registration}/`}
                  />
                );
              })}
        </ExamsList>
      </PageSection>
    </ExamsPageContainer>
  );
};
