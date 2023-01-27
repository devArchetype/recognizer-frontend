import React, { useContext, useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { AuthContext } from '../../contexts/AuthContext';
import { PageSection } from '../../layouts/PageSection';

import { Password, Pencil, Trash } from 'phosphor-react';
import {
  AvatarContainer,
  ButtonsContainer,
  ContentSection,
  InformatiosWrapper,
  ProfilePageContainer,
  StatisticContainer,
  StatisticsWrapper,
  Wrapper,
} from './styles';

import { toast } from 'react-toastify';
import * as zod from 'zod';
import { User } from '../../@types/auth';
import { recognizerApi } from '../../services/axios/instances';

type Statistics = {
  groups: number;
  members: number;
};

export const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState(user.avatar || '/images/favicon.svg');
  const [statistics, setStatistics] = useState({} as Statistics);

  const UpdateFormSchema = zod.object({
    name: zod.string().min(3, { message: 'Insira um nome válido!' }),
    email: zod.string().email({ message: 'Insira um email válido!' }),
    avatar: zod.string(),
  });

  type UpdateFormFormData = zod.infer<typeof UpdateFormSchema>;

  const UpdatedForm = useForm<UpdateFormFormData>({
    resolver: zodResolver(UpdateFormSchema),
  });

  const { formState, register, handleSubmit } = UpdatedForm;
  const { errors } = formState;

  const handleUpdateSubmit = async () => {
    const {
      data: { user, sucess, message },
    } = await recognizerApi.put('/user/update', {
      name,
      email,
      avatar,
    });

    if (sucess) {
      setUser(user as User);
      toast.info(sucess);
    } else {
      toast.error(
        message || 'Ops, algum erro aconteceu! Tente novamente mais tarde.'
      );
    }
  };

  const convertBase64 = (file: Blob) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileRead = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const base64 = await convertBase64(file);
      setAvatar(base64 as string);
    }
  };

  useEffect(() => {
    (async () => {
      const {
        data: { groups = 0, members = 0 },
      } = await recognizerApi.get('/user/statistics');
      setStatistics({ groups, members });
    })();
  }, []);

  return (
    <ProfilePageContainer heading="Seu perfil">
      <Wrapper>
        <ContentSection>
          <AvatarContainer>
            <span onClick={() => setAvatar('/images/favicon.svg')}>
              <Trash className="label-delete" size={30} />
            </span>

            <Avatar
              email=""
              name=""
              url={avatar}
              size="xl"
              orientation="column"
              align="center"
            />

            <label>
              <Pencil className="label-click" size={30} />
              <input
                id="file"
                type="file"
                onChange={(event) => handleFileRead(event)}
              />
            </label>
          </AvatarContainer>

          <StatisticsWrapper>
            <StatisticContainer>
              <strong>{statistics.groups ?? 0}</strong>
              <div>grupos</div>
            </StatisticContainer>
            <StatisticContainer>
              <strong>{statistics.members ?? 0}</strong>
              <div>alunos</div>
            </StatisticContainer>
          </StatisticsWrapper>
        </ContentSection>

        <PageSection heading="Informações">
          <InformatiosWrapper onSubmit={handleSubmit(handleUpdateSubmit)}>
            <InputField
              label="Nome:"
              border
              value={name}
              onChange={(event) => setName(event.target.value)}
              register={register('name', { required: true })}
              errorMessage={errors.name && errors.name.message}
            />

            <InputField
              label="Email:"
              border
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              register={register('email', { required: true })}
              errorMessage={errors.email && errors.email.message}
            />

            <InputField
              label=""
              type="hidden"
              value={avatar}
              onChange={(event) => setEmail(event.target.value)}
              register={register('avatar', { required: true })}
              errorMessage={errors.email && errors.email.message}
            />

            <ButtonsContainer>
              <Link to="/sessao/recuperar">
                <Button
                  label="Atualizar Senha"
                  type="button"
                  variant="line"
                  icon={<Password />}
                />
              </Link>

              <Button
                className="large"
                label="Atualizar Dados"
                type="submit"
                icon={<Pencil />}
              />
            </ButtonsContainer>
          </InformatiosWrapper>
        </PageSection>
      </Wrapper>
    </ProfilePageContainer>
  );
};
