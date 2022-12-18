import styled from 'styled-components';

export const AuthenticationMain = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthenticationSection = styled.section`
  width: 30%;
  min-width: 250px;
  display: flex;
  gap: ${(props) => props.theme.spacing.lg};
  flex-direction: column;
  background-color: ${(props) => props.theme.color['base-50']};
  padding: ${(props) => props.theme.spacing.lg};
  border-radius: ${(props) => props.theme.rounded.base};
  box-shadow: ${(props) => props.theme.shadow.lg};
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
  gap: ${(props) => props.theme.spacing.sm};

  div {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.xxs};

    input {
      border: 1px solid ${(props) => props.theme.color['base-400']};
      box-shadow: ${(props) => props.theme.shadow.base};
      padding: 0.6rem;
      border-radius: ${(props) => props.theme.rounded.base};
    }
  }
  input::placeholder {
    color: ${(props) => props.theme.color['base-400']};
  }

  label {
    color: ${(props) => props.theme.color['base-600']};
    font-weight: ${(props) => props.theme.font.medium};
  }

  a {
    font-weight: ${(props) => props.theme.font.medium};
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
