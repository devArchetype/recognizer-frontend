import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.md};
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.rounded.base};
  background-color: ${(props) => props.theme.color['base-light']};
  box-shadow: ${(props) => props.theme.shadow.base};

  @media ${(props) => props.theme.screen.sm} {
    gap: ${(props) => props.theme.spacing.xxl};
    height: auto;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};

  h2 {
    font-size: ${(props) => props.theme.text.lg};
    color: ${(props) => props.theme.color['base-900']};
    font-weight: ${(props) => props.theme.font.medium};
  }

  @media ${(props) => props.theme.screen.sm} {
    gap: ${(props) => props.theme.spacing.lg};

    h2 {
      font-size: ${(props) => props.theme.text.xxl};
    }
  }
`;

export const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.md};

    input {
      border: ${(props) => props.theme.color['base-400']};
    }

    button[type='submit'] {
      width: 100%;
      margin: ${(props) => props.theme.spacing.md} auto;
      justify-content: center;
    }
  }

  @media ${(props) => props.theme.screen.sm} {
    button {
      max-width: 50%;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: ${(props) => props.theme.color['brand-600']};
  }
`;

export const RecoveryPasswordContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
