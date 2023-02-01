import styled from 'styled-components';

export const BreadcrumbContainer = styled.ol`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.xs};

  li:last-child {
    font-weight: ${(props) => props.theme.font.medium};
  }
`;
