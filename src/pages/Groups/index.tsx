import { MagnifyingGlass, PlusCircle, User } from 'phosphor-react';
import { useRef } from 'react';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { PageSection } from '../../components/layouts/PageSection';
import { Modal } from '../../components/Modal';
import { GroupsList, GroupsPageContainer } from './styles';

import { Group } from '../../@types/app';
import { Card } from '../../components/Card';
import groupsData from './data.json';

export const Groups = () => {
  const modalRef = useRef();

  const handleModalVisibility = () => {
    modalRef.current.handleModalVisibility();
  };

  return (
    <GroupsPageContainer heading="Grupos">
      <PageSection
        heading="Meus grupos"
        actions={
          <>
            <InputField
              label={'Filtrar grupos'}
              placeholder={'Filtrar grupos'}
              srLabel
              icon={<MagnifyingGlass />}
            />
            <Button
              label={'Novo grupo'}
              icon={<PlusCircle />}
              onClick={handleModalVisibility}
            />
          </>
        }
      >
        <GroupsList>
          {groupsData.map(({ id, name, members }: Group) => {
            return (
              <Card
                key={id}
                id={id}
                heading={name}
                content={
                  <>
                    <div>
                      <User />
                      <span>{members}</span>
                    </div>
                    <div>
                      <User />
                      <span>{members}</span>
                    </div>
                  </>
                }
              />
            );
          })}
        </GroupsList>
      </PageSection>
      <Modal heading="Criar novo grupo" ref={modalRef}>
        <div>
          <strong>Modal</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            amet? Sequi ullam dolorum cumque amet ipsum quos! Nam, laboriosam
            ratione numquam, iste nostrum provident optio quod vel mollitia unde
            dolore.
          </p>
        </div>
      </Modal>
    </GroupsPageContainer>
  );
};
