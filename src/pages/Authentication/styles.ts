import styled from 'styled-components';

export const AuthenticationMain = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* display: flex;
  gap: ${(props) => props.theme.spacing.xs};
  flex-direction: column; */
`;

export const AuthenticationSection = styled.section`
  width: 35%;
  min-width: 250px;
  display: flex;
  gap: ${(props) => props.theme.spacing.lg};
  flex-direction: column;
  background-color: ${(props) => props.theme.color['base-50']};
  padding: ${(props) => props.theme.spacing.lg};
`;

export const AuthenticationHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.lg};
  
  h2 {
    font-size: ${(props) => props.theme.text.xxl};
    color: ${(props) => props.theme.color['base-dark']};
    font-weight: ${(props) => props.theme.font.medium};
  }
  
  div {
    font-size: ${(props) => props.theme.text.xxl};
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xs};

  div {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.xxs};

    input {
      border: 1px solid ${(props) => props.theme.color['base-500']};
      padding: ${(props) => props.theme.spacing.xs};
      border-radius: ${(props) => props.theme.rounded.base};
    }
  }
  
  .anchor {
    display: flex;
    justify-content: flex-end;
  }
`;

export const ButtonGroups = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xl};

  button {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* gap: ${(props) => props.theme.spacing.xs}; */
  }
`;
