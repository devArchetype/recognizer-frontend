import styled from 'styled-components';
import { BasePage } from '../../components/layouts/BasePage';

export const ExamsPageContainer = styled(BasePage)``;

export const ExamsList = styled.ul`
  display: grid;
  grid-gap: ${(props) => props.theme.spacing.sm};
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
