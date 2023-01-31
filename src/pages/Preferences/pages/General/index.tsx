import { SignOut } from 'phosphor-react';
import { useContext } from 'react';
import { Button } from '../../../../components/Button';
import { Switch } from '../../../../components/Switch';
import { AuthContext } from '../../../../contexts/AuthContext';
import { PreferencesContext } from '../../../../contexts/PreferencesContext';
import { PageSection } from '../../../../layouts/PageSection';

export const General = () => {
  const { logout } = useContext(AuthContext);
  const { isDark, toggleTheme } = useContext(PreferencesContext);

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
        label={label}
        title={label}
        srLabel={false}
        checked={isDark}
        leftLabel
        onChange={toggleTheme}
      />
      <div>
        <Button
          label="Sair"
          type="button"
          variant="line"
          icon={<SignOut />}
          onClick={logout}
        />
      </div>
    </PageSection>
  );
};
