import styled from 'styled-components';
import { BasePage } from '../../layouts/BasePage';

export const PrintExamContainer = styled(BasePage)``;

export const Container = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;

export const PrintContainer = styled.div`
  @media print {
    width: 100vw;
    position: absolute;
    inset: 0;
    z-index: 99;
    background-color: ${(props) => props.theme.color.white};
  }
`;

export const PrintMessage = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.color['base-400']};
`;
