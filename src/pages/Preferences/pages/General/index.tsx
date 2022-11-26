import { useId } from 'react';
import { PageSection } from '../../../../components/layouts/PageSection';
import { Switch } from '../../../../components/Switch';

export const General = () => {
  return (
    <PageSection heading="Geral">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque harum
        quasi tempora corporis ab soluta commodi molestiae, quam sed recusandae
        reiciendis, eligendi molestias inventore eos sapiente voluptate sunt
        quia in.
      </p>
      <Switch id={useId()} srLabel={'OI'} />
    </PageSection>
  );
};
