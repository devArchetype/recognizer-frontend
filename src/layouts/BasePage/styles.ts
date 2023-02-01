import styled from 'styled-components';

export const BasePageContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing.md};
`;

export const PageHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
  padding-bottom: ${(props) => props.theme.spacing.xs};
  margin-bottom: ${(props) => props.theme.spacing.xs};
  border-bottom: solid 2px ${(props) => props.theme.color['base-200']};

  @media ${(props) => props.theme.screen.md} {
    padding-bottom: ${(props) => props.theme.spacing.md};
    margin-bottom: ${(props) => props.theme.spacing.md};
  }
`;

export const Heading = styled.div`
  h1 {
    font-size: ${(props) => props.theme.text.xl};
    font-weight: ${(props) => props.theme.font.medium};
    color: ${(props) => props.theme.color['base-900']};
  }

  @media ${(props) => props.theme.screen.md} {
    h1 {
      font-size: ${(props) => props.theme.text.xxl};
    }
  }
`;

export const PageContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.lg};
`;

export const PageHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.sm};
  margin-bottom: 2px;

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${(props) => props.theme.spacing.sm};
  }
`;
