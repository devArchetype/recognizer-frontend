import { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { Avatar } from '../../components/Avatar';
import { PageSection } from '../../layouts/PageSection';
import { InputField } from '../../components/InputField';
import { Button } from '../../components/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Pencil } from 'phosphor-react';
import {
  ContentSection,
  Information,
  InformatiosWrapper,
  ProfilePageContainer,
  StatisticContainer,
  StatisticsWrapper,
  Wrapper,
  AvatarContainer,
} from './styles';

import * as zod from 'zod';

export const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState(user.avatar || '/images/favicon.svg');

  const UpdateFormSchema = zod.object({
    name: zod.string().min(3, { message: 'Insira um nome válido!' }),
    email: zod.string().email({ message: 'Insira um email válido!' }),
  });

  type UpdateFormFormData = zod.infer<typeof UpdateFormSchema>;

  const UpdatedForm = useForm<UpdateFormFormData>({
    resolver: zodResolver(UpdateFormSchema),
  });

  const { formState, register, handleSubmit } = UpdatedForm;
  const { errors } = formState;

  const handleUpdateSubmit = ({ name, email }: UpdateFormFormData) => {};

  return (
    <ProfilePageContainer heading="Seu perfil">
      <Wrapper>
        <ContentSection>
          <AvatarContainer>
            <Avatar
              email=""
              name=""
              url={user.avatar || '/images/favicon.svg'}
              size="xl"
              orientation="column"
              align="center"
            />
            <Button label="" type="button" icon={<Pencil />} />
          </AvatarContainer>

          <StatisticsWrapper>
            <StatisticContainer>
              <strong>85</strong>
              <div>grupos</div>
            </StatisticContainer>
            <StatisticContainer>
              <strong>215</strong>
              <div>alunos</div>
            </StatisticContainer>
          </StatisticsWrapper>
        </ContentSection>

        <PageSection heading="Informações">
          <InformatiosWrapper onSubmit={handleSubmit(handleUpdateSubmit)}>
            <InputField
              label="Nome:"
              border
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              register={register('name', { required: true })}
              errorMessage={errors.name && errors.name.message}
            />

            <InputField
              label="Email:"
              border
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              register={register('email', { required: true })}
              errorMessage={errors.email && errors.email.message}
            />

            <input type="hidden" name="avalar" />

            <Button label="Atualizar Dados" type="submit" icon={<Pencil />} />
          </InformatiosWrapper>
        </PageSection>
      </Wrapper>
    </ProfilePageContainer>
  );
};
