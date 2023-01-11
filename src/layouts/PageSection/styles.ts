import styled from 'styled-components';
import { SrOnly } from '../../styles/utils';

interface ActionsProps {
  srHeading: boolean;
}

export const PageSectionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;

export const Actions = styled.div<ActionsProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.srHeading ? 'end' : 'space-between')};
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.md};

  h2 {
    ${(props) => props.srHeading && SrOnly};

    font-size: ${(props) => props.theme.text.xl};
    font-weight: ${(props) => props.theme.font.medium};
    color: ${(props) => props.theme.color['base-800']};
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap-reverse;
  gap: ${(props) => props.theme.spacing.sm};
`;
