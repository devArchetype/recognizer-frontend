import { ExamsPageContainer, ExamsList } from './styles';

import { Button } from '../../components/Button';
import { PageSection } from '../../components/layouts/PageSection';
import { InputField } from '../../components/InputField';
import { MagnifyingGlass } from 'phosphor-react';

import { Exam } from '../../@types/app';
import { Card } from '../../components/Card';
import examsData from './data.json';

export const Exams = () => {
  // illustrative data
  const examName = 'Prova A';
  const group = 'Grupo A';

  return (
    <ExamsPageContainer heading={examName + ' - ' + group}>
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
