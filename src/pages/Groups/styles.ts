import styled from 'styled-components';
import { BasePage } from '../../layouts/BasePage';

export const GroupsPageContainer = styled(BasePage)``;

export const GroupsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
`;
