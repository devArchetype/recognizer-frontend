import { BaseModal, ModalProps } from '../../base/BaseModal';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import { useContext, useEffect, useState } from 'react';
import { User } from 'phosphor-react';
import { Switch } from '../../Switch';
import { AuthContext } from '../../../contexts/AuthContext';
import { recognizerApi } from '../../../services/axios/instances';
import { toast } from 'react-toastify';

import { SwitchContainer } from './styles';
import { useNavigate, useParams } from 'react-router-dom';

type Member = {
  id: string;
  name: string;
  externalId?: string;
};

export const PrintExamsMembersModal = ({ handleModalDisplay }: ModalProps) => {
  const { groupId, examId } = useParams();
  const navigate = useNavigate();

  const [checked, setChecked] = useState([] as Member[]);
  const [markAllIMembers, setMarkAllMembers] = useState(false);
  const { setMembersExamPrint } = useContext(AuthContext);
  const [members, setMembers] = useState([] as Member[]);

  useEffect(() => {
    setMembersExamPrint([]);

    (async () => {
      const {
        data: { success, members, message },
      } = await recognizerApi.get(`/members/show/${groupId}`);
      if (message) {
        toast.error(
          message || 'Ops, algum erro aconteceu! Tente novamente mais tarde.'
        );
      } else {
        setMembers(members);
        toast.info(success);
      }
    })();
  }, []);

  const handleToggle = (member: Member) => () => {
    const currentIndex = checked.indexOf(member);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(member);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleMembers = async () => {
    if (markAllIMembers) setMembersExamPrint(members);
    else setMembersExamPrint(checked);

    if (markAllIMembers || checked.length > 0) {
      navigate(`/grupos/${groupId}/${examId}/imprimir`);
    } else {
      toast.error('Selecione pelo menos um integrante para prosseguir');
    }
  };

  const handleClearList = () => {
    handleModalDisplay!();
  };

  return (
    <BaseModal
      heading="Selecione os Participantes da Prova"
      onClickButton={handleMembers}
      onCancel={handleClearList}
    >
      <SwitchContainer>
        <Switch
          label="Marcar Todos"
          srLabel={false}
          leftLabel
          onChange={(event) => setMarkAllMembers(event.target.checked)}
        />
      </SwitchContainer>

      <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {members.map((member) => {
          const labelId = `checkbox-list-secondary-label-${member.id}`;
          return (
            <ListItem
              key={member.id}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(member)}
                  checked={checked.indexOf(member) !== -1 || markAllIMembers}
                  inputProps={{ 'aria-labelledby': labelId }}
                  className="check-item"
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <User size={30} />
                </ListItemAvatar>
                <ListItemText
                  id={labelId}
                  primary={`${member.name} - ${member.externalId ?? ''}`}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </BaseModal>
  );
};
