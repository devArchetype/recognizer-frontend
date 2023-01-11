import { Button } from '../../../components/Button';
import { InputField } from '../../../components/InputField';
import { SessionContainer } from '../../../components/layouts/SessionDefaultLayout/components/SessionContainer';
import { ContentContainer } from '../../../components/layouts/SessionDefaultLayout/components/SessionContainer/styles';

export const Recovery = () => {
  return (
    <SessionContainer heading="Alterar senha">
      <ContentContainer>
        <form>
          <InputField
            label="Email"
            placeholder="exemplo@recognizer.com"
            border
          />
          <InputField label="Nova senha" type="password" border />
          <InputField label="Confirmar nova senha" type="password" border />

          <Button label="Acessar" />
        </form>
      </ContentContainer>
    </SessionContainer>
  );
};
