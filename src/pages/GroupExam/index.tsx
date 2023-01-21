import { DateDetailsContent, ExamsList, ExamsPageContainer } from './styles';

import { useState } from 'react';

import { MagnifyingGlass } from 'phosphor-react';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { PageSection } from '../../layouts/PageSection';

import { Link, useParams } from 'react-router-dom';
import { Card } from '../../components/Card';
import { ModalTrigger } from '../../layouts/BaseModal';
import { CheckExamTemplateModal } from '../../layouts/Modals/CheckExamTemplateModal';
import examsData from './data.json';

export const GroupExam = () => {
  const { groupId, examId } = useParams();

  const [searchExam, setSearchExam] = useState('');

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
            <InputField
              label="Integrante"
              placeholder="Buscar Integrante"
              icon={<MagnifyingGlass />}
              onChange={(event) => setSearchExam(event.target.value)}
              srLabel
            />
            <ModalTrigger
              trigger={<Button type="button" label={'Ver Gabarito'} />}
              modal={<CheckExamTemplateModal />}
            />

            <Button type="button" label={'Exportar'} />
          </>
        }
      >
        <ExamsList>
          {examsData.map(({ id, name, registration }) => {
            return (
              <Card
                key={id}
                heading={name}
                label="Ver Prova"
                target={`/grupos/${groupId}/${examId}/${registration}/`}
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
        </ExamsList>
      </PageSection>
    </ExamsPageContainer>
  );
};
