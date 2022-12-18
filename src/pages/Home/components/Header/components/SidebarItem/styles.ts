import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.color['brand-600']};
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: ${(props) => props.theme.color['brand-700']};
  }

  a,
  a:visited,
  a:link {
    cursor: pointer;
    position: relative;
    color: ${(props) => props.theme.color['base-light']};
    box-shadow: none;
    font-weight: ${(props) => props.theme.font.medium};
  }
`;
