import {
  DateDetailsContent,
  ExamsList,
  ExamsPageContainer,
  TextareaContent,
} from './styles';

import { useRef, useState } from 'react';

import { MagnifyingGlass } from 'phosphor-react';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { PageSection } from '../../layouts/PageSection';

import { Exam } from '../../@types/app';
import { Card } from '../../components/Card';
import examsData from './data.json';

export const Exams = () => {
  const [details, setDetails] = useState('Anotações gerais ...');
  const detailsRef = useRef<HTMLTextAreaElement | null>(null);
  const [searchExam, setSearchExam] = useState('');

  const fillExams = () => {
    return examsData.map(({ id, name, registration }: Exam) => {
      if (!name.toLowerCase().includes(searchExam.toLowerCase())) {
        if (
          !String(registration).toLowerCase().includes(searchExam.toLowerCase())
        ) {
          return null;
        }
      }

      return (
        <Card
          key={id}
          id={id}
          heading={name}
          label="Ver Prova"
          target="/grupos/provas"
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
    });
  };

  const handleChangeDetails = (value: string) => {
    setDetails(value);
    // save data in database later
  };

  const editDetailsEnable = () => {
    detailsRef.current?.focus();
  };

  const handleModalInsertExamVisibility = () => {
    // modalInsertExamRef.current.handleModalVisibility();
  };

  // illustrative data
  const examName = 'Prova A';
  const group = 'Grupo A';
  const dateDetails = '11 de Novembro de 2022';

  return (
    <ExamsPageContainer
      heading={examName + ' - ' + group}
      actions={
        <>
          <Button type="button" label={'Imprimir provas'} />
          <Button
            type="button"
            label={'Inserir provas'}
            onClick={handleModalInsertExamVisibility}
          />
        </>
      }
    >
      <PageSection
        heading="Detalhes"
        actions={
          <>
            <Button
              onClick={editDetailsEnable}
              type="button"
              label={'Editar'}
              variant="line"
            />
          </>
        }
      >
        <DateDetailsContent>
          <h3>{dateDetails}</h3>

          <TextareaContent
            ref={detailsRef}
            name="details"
            value={details}
            onChange={(event) => handleChangeDetails(event.target.value)}
            // disabled={disabled}
          />
        </DateDetailsContent>
      </PageSection>

      <PageSection
        heading="Resultados"
        actions={
          <>
            <InputField
              label={'integrant'}
              placeholder={'Buscar Integrante'}
              srLabel
              icon={<MagnifyingGlass />}
              onChange={(event) => setSearchExam(event.target.value)}
            />
            <Button type="button" label={'Ver Gabarito'} />
            <Button type="button" label={'Exportar'} />
          </>
        }
      >
        <ExamsList>{fillExams()}</ExamsList>
      </PageSection>
    </ExamsPageContainer>
  );
};
