import styled from 'styled-components';
import { SrOnly } from '../../styles/utils';

export const LoadingContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  position: relative;
  display: grid;
  place-items: center;
`;

export const Spinner = styled.div`
  width: ${(props) => props.theme.spacing.xl};
  height: ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.rounded.full};
  border: 4px solid ${(props) => props.theme.color['base-300']};
  border-top-color: ${(props) => props.theme.color['brand-500']};
  animation: spin 1s linear infinite;

  span {
    ${SrOnly}
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
