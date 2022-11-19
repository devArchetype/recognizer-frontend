import styled from 'styled-components';
import { BasePage } from '../../components/layouts/BasePage';

export const ExamPageContainer = styled(BasePage)``;

export const CardExam = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
  margin-bottom: ${(props) => props.theme.spacing.lg};

  h2 {
    font-size: ${(props) => props.theme.text.xl};
    color: ${(props) => props.theme.color['base-600']};
    font-weight: ${(props) => props.theme.font.medium};
  }
`;

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
