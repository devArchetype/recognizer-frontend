import styled from 'styled-components';

import { BasePage } from '../../layouts/BasePage';

export const ProfilePageContainer = styled(BasePage)``;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.lg};
  padding: ${(props) => props.theme.spacing.sm} 0;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.screen.md} {
    padding: ${(props) => props.theme.spacing.xl} 0;
    gap: ${(props) => props.theme.spacing.md};
    flex-direction: row;

    .page-section {
      width: 50%;
    }
  }
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};

  @media ${(props) => props.theme.screen.md} {
    width: 50%;
    gap: ${(props) => props.theme.spacing.lg};
  }
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
  padding-right: 2.4rem;
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

export const InformatiosWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};

  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media ${(props) => props.theme.screen.md} {
    width: 70%;
    gap: ${(props) => props.theme.spacing.lg};
  }
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

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  button {
    padding: 0.5rem;
  }
`;
