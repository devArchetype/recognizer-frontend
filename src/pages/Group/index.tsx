import { MagnifyingGlass, PlusCircle } from 'phosphor-react';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { PageSection } from '../../layouts/PageSection';
import { ExamSection, GroupPageContainer } from './styles';

export const Group = () => {
  return (
    <GroupPageContainer heading="Grupo A">
      <ExamSection
        heading="Provas"
        actions={
          <>
            <InputField
              label={'Filtrar grupos'}
              placeholder={'Filtrar grupos'}
              srLabel
              icon={<MagnifyingGlass />}
            />
            <Button label={'Criar Prova'} icon={<PlusCircle />} />
          </>
        }
      >
        cdsavc
      </ExamSection>
      <PageSection
        heading="Integrantes"
        actions={
          <>
            <InputField
              label={'Filtrar integrantes'}
              placeholder={'Filtrar integrantes'}
              srLabel
              icon={<MagnifyingGlass />}
            />
            <Button label={'Novo integrante'} icon={<PlusCircle />} />
          </>
        }
      >
        cdsavc
      </PageSection>
    </GroupPageContainer>
  );
};
