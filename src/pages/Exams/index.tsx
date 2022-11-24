import { ExamsPageContainer } from './styles';

import { Button } from '../../components/Button';
import { PageSection } from '../../components/layouts/PageSection';
import { InputField } from '../../components/InputField';
import { MagnifyingGlass } from 'phosphor-react';

interface ExamsProps {
  examName: string;
  group: string;
}

export const Exams = ({ examName, group }: ExamsProps) => {
  return (
    <ExamsPageContainer heading={examName + ' - ' + group}>
      <PageSection
        heading="Meus grupos"
        actions={
          <>
            <InputField
              label={'Buscar Integrante'}
              placeholder={'Buscar Integrante'}
              srLabel
              icon={<MagnifyingGlass />}
            />
            <Button type="button" label={'Ver Gabarito'} />
            <Button type="button" label={'Exportar'} />
          </>
        }
      >
        <h1>sdcs</h1>
      </PageSection>
    </ExamsPageContainer>
  );
};
