import styled from 'styled-components';

export const CardContainer = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacing.xs};
  border-radius: ${(props) => props.theme.rounded.base};
  box-shadow: ${(props) => props.theme.shadow.base};
  background-color: ${(props) => props.theme.color['base-light']};
`;

export const ContentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xs};

  strong {
    font-size: ${(props) => props.theme.text.lg};
    font-weight: ${(props) => props.theme.font.medium};
    color: ${(props) => props.theme.color['base-600']};
  }
`;

export const ContentList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  font-size: ${(props) => props.theme.text.sm};
`;

export const ContentItemContainer = styled.li`
  display: flex;
  align-items: center;
  line-height: min-content;
  gap: ${(props) => props.theme.spacing.xxs};

  div:first-child:has(svg) {
    line-height: 0;
    font-size: ${(props) => props.theme.text.md};
  }

  div:first-child {
    color: ${(props) => props.theme.color['base-600']};
  }
`;
