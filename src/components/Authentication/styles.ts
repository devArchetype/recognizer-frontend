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
  display: flex;
  gap: ${(props) => props.theme.spacing.lg};
  flex-direction: column;
  background-color: ${(props) => props.theme.color['base-50']};
  padding: ${(props) => props.theme.spacing.lg};
`;

export const AuthenticationHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xs};
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

  .end-align {
    display: flex;
    justify-content: flex-end;
  }
`;

export const ButtonGroups = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};

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
