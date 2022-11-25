import {
  ExamsPageContainer,
  ExamsList,
  TextareaContent,
  DateDetailsContent,
} from './styles';

import { useRef, useState } from 'react';

import { Button } from '../../components/Button';
import { PageSection } from '../../components/layouts/PageSection';
import { InputField } from '../../components/InputField';
import { MagnifyingGlass } from 'phosphor-react';

import { Exam } from '../../@types/app';
import { Card } from '../../components/Card';
import examsData from './data.json';

export const Exams = () => {
  const [details, setDetails] = useState(
    'Anotações gerais do professor: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem possimus aliquam deserunt veritatis pariatur inventore, repudiandae veniam! Voluptates nulla tenetur eos optio, iure voluptatibus magnam culpa quisquam dolorem exercitation.'
  );
  const detailsRef = useRef<HTMLTextAreaElement | null>(null);
  const [disabled, setDisabled] = useState(false);

  const handleChangeDetails = (value: string) => {
    setDetails(value);
    // save data in database later
  };

  const editDetailsEnable = () => {
    setDisabled(false);
    detailsRef.current?.focus();
  };

  // illustrative data
  const examName = 'Prova A';
  const group = 'Grupo A';
  const dateDetails = '11 de Novembro de 2022';

  return (
    <ExamsPageContainer heading={examName + ' - ' + group}>
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
            disabled={disabled}
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
            />
            <Button type="button" label={'Ver Gabarito'} />
            <Button type="button" label={'Exportar'} />
          </>
        }
      >
        <ExamsList>
          {examsData.map(({ id, name, registration }: Exam) => {
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
          })}
        </ExamsList>
      </PageSection>
    </ExamsPageContainer>
  );
};
