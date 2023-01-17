import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import {  Text, RigthButtons, CenteredContainer, Wrapper,  LeftDiv, RightDiv, ProfilePageContainer } from './styles';
import { Avatar } from '../../components/Avatar';

export const Profile = () => {
  return (
    <ProfilePageContainer heading="Profile">
    <Wrapper proporcion="1/2">
      <LeftDiv>
        <Avatar
              size='xl'
              url="/images/favicon.svg"    
        />
      <Text>{"Maria Clara"}</Text>
      <Wrapper proporcion="1/1">
        <CenteredContainer bigText={true}>
          <div className="bigText">85</div>
          <span className="smallText">grupos</span>
        </CenteredContainer>
        <CenteredContainer bigText={true}>
          <div className="bigText">215</div>
          <span className="smallText">Alunos</span>
        </CenteredContainer>
      </Wrapper>
      <CenteredContainer>
      <Button  label="Alterar foto de perfil"/>
      </CenteredContainer>
      </LeftDiv>
      <RightDiv>
        <ProfilePageContainer BreadCrumb={false} heading="Informações"/>
        <InputField
                label={'Nome'}
                placeholder={'Maria Clara'}              
        />
        <InputField

                label={'Email'}
                placeholder={'mariaclara@gmail.com'}              
        />
        <RigthButtons>
          <Button label="Salvar"/>
          <Button variant='secondary' label="Cancelar"/>
        </RigthButtons>
      </RightDiv>
    </Wrapper>
    </ProfilePageContainer>
  );
};
