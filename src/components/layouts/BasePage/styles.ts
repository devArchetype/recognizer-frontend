import styled from 'styled-components'

export const BasePageContainer = styled.section`
  flex: 1;
  padding: var(--spacing-md);

  main {
    flex: 1;
  }
`

export const PageHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding-bottom: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  border-bottom: solid 2px ${(props) => props.theme['base-200']};
`

export const Heading = styled.div`
  h1 {
    font-size: var(--text-xxl);
    font-weight: var(--font-medium);
    color: ${(props) => props.theme['base-900']};
  }
`

export const Breadcrumb = styled.ol`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--text-sm);
  color: ${(props) => props.theme['base-400']};

  li:last-child {
    font-weight: var(--font-medium);
  }
`
