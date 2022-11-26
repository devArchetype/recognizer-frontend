import { useContext, useId } from 'react';
import { PageSection } from '../../../../components/layouts/PageSection';
import { Switch } from '../../../../components/Switch';
import { PreferencesContext } from '../../../../contexts/PreferencesContext';

export const General = () => {
  const { toggleTheme } = useContext(PreferencesContext);

  return (
    <PageSection heading="Geral">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque harum
        quasi tempora corporis ab soluta commodi molestiae, quam sed recusandae
        reiciendis, eligendi molestias inventore eos sapiente voluptate sunt
        quia in.
      </p>
      <Switch id={useId()} srLabel={'OI'} onChange={toggleTheme} />
    </PageSection>
  );
};
