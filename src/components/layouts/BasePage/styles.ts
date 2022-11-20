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
  padding-bottom: ${(props) => props.theme.spacing.md};
  margin-bottom: ${(props) => props.theme.spacing.md};
  border-bottom: solid 2px ${(props) => props.theme.color['base-200']};
`;

export const Heading = styled.div`
  h1 {
    font-size: ${(props) => props.theme.text.xxl};
    font-weight: ${(props) => props.theme.font.medium};
    color: ${(props) => props.theme.color['base-900']};
  }
`;

export const Breadcrumb = styled.ol`
  display: inline-flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  font-size: ${(props) => props.theme.text.sm};
  color: ${(props) => props.theme.color['base-400']};

  li:last-child {
    font-weight: ${(props) => props.theme.font.medium};
  }
`;

export const PageContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;
