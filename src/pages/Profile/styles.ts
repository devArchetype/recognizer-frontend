import styled from 'styled-components';

import { BasePage } from '../../layouts/BasePage';

export const ProfilePageContainer = styled(BasePage)``;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
  padding: ${(props) => props.theme.spacing.md} 0;

  @media ${(props) => props.theme.screen.md} {
    padding: ${(props) => props.theme.spacing.xl} 0;
    flex-direction: row;
  }
`;

export const ContentSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing.lg};

  @media ${(props) => props.theme.screen.md} {
    gap: ${(props) => props.theme.spacing.xxl};
  }
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
`;

export const StatisticContainer = styled.div`
  text-align: center;

  strong {
    font-size: ${(props) => props.theme.text.xl};
    font-weight: ${(props) => props.theme.font.bold};
    color: ${(props) => props.theme.color['base-900']};
  }

  div {
    font-weight: ${(props) => props.theme.font.medium};
  }

  @media ${(props) => props.theme.screen.md} {
    strong {
      font-size: ${(props) => props.theme.text.xxl};
    }
  }
`;

export const InformatiosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xs};
`;

export const Information = styled.div`
  strong {
    color: ${(props) => props.theme.color['base-600']};
    font-weight: ${(props) => props.theme.font.medium};
  }

  div {
    color: ${(props) => props.theme.color['base-800']};
  }
`;
