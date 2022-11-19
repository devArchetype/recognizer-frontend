import styled from 'styled-components';
import { BasePage } from '../../components/layouts/BasePage';

export const ExamPageContainer = styled(BasePage)``;

export const StatisticsgContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
  margin-bottom: ${(props) => props.theme.spacing.sm};

  h2 {
    font-size: ${(props) => props.theme.text.xl};
  }

  .statistics {
    width: 100%;
    display: flex;
    justifify-content: center;
    algn-align: center;
    flex-wrap: wrap;
    gap: ${(props) => props.theme.spacing.lg};
    font-size: ${(props) => props.theme.text.sm};

    span {
      font-size: ${(props) => props.theme.text.lg};
      font-weight: ${(props) => props.theme.font.bold};
    }

    .right {
      color: #2dd4bf;
    }

    .wrong {
      color: #e11d48;
    }
  }
`;

export const AnswersContainer = styled.section`
  h2 {
    font-size: ${(props) => props.theme.text.xl};
  }
`;
