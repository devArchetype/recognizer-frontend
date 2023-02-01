import styled from 'styled-components';
import { BasePage } from '../../layouts/BasePage';

export const ExamPageContainer = styled(BasePage)``;

export const StatisticsContainer = styled.div`
  display: flex;
  justifify-content: center;
  algn-align: center;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.md};
  font-size: ${(props) => props.theme.text.md};

  p {
    color: ${(props) => props.theme.color['base-400']};
    font-weight: ${(props) => props.theme.font.regular};
  }

  span {
    font-size: ${(props) => props.theme.text.lg};
    font-weight: ${(props) => props.theme.font.bold};
  }

  .right {
    color: ${(props) => props.theme.color['success-base']};
  }

  .wrong {
    color: ${(props) => props.theme.color['danger-dark']};
  }
`;
