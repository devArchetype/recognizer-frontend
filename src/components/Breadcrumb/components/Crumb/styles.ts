import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CrumbContainer = styled(Link)`
  display: inline-flex;
  gap: ${(props) => props.theme.spacing.xs};

  font-size: ${(props) => props.theme.text.sm};
  color: ${(props) => props.theme.color['base-400']};
`;
