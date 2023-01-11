import { useContext, useId } from 'react';
import { Switch } from '../../../../components/Switch';
import { PreferencesContext } from '../../../../contexts/PreferencesContext';
import { PageSection } from '../../../../layouts/PageSection';

export const General = () => {
  const { isDark, toggleTheme } = useContext(PreferencesContext);
  const themeSwitchId = useId();

  const label = isDark ? 'Alterar para tema claro' : 'Alterar para tema escuro';

  return (
    <PageSection heading="Geral">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque harum
        quasi tempora corporis ab soluta commodi molestiae, quam sed recusandae
        reiciendis, eligendi molestias inventore eos sapiente voluptate sunt
        quia in.
      </p>
      <Switch
        id={themeSwitchId}
        srLabel={label}
        title={label}
        onChange={toggleTheme}
        checked={isDark}
      />
    </PageSection>
  );
};
