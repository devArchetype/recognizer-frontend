import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: ${(props) => props.theme.color['base-dark-translucent']};
`;

export const OverlayContainer = styled.div`
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 60;
  padding: ${(props) => props.theme.spacing.xs};

  @media ${(props) => props.theme.screen.sm} {
    padding: ${(props) => props.theme.spacing.md};
  }
`;

export const Container = styled(Dialog.Content)`
  width: 100%;
  max-width: 768px;
  max-height: calc(100vh - ${(props) => props.theme.spacing.md});
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: ${(props) => props.theme.spacing.md};
  padding: inherit;
  border-radius: ${(props) => props.theme.rounded.base};
  box-shadow: ${(props) => props.theme.shadow.base};
  background-color: ${(props) => props.theme.color['base-100']};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${(props) => props.theme.spacing.xs};
  border-bottom: solid 1px ${(props) => props.theme.color['base-200']};
`;

export const Title = styled(Dialog.Title)`
  font-size: ${(props) => props.theme.text.xl};
  font-weight: ${(props) => props.theme.font.medium};
  color: ${(props) => props.theme.color['base-900']};
`;

export const Content = styled.div`
  flex: 1;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap-reverse;
  gap: ${(props) => props.theme.spacing.xs};
`;

export const ModalFormContainer = styled.div`
  height: 100%;

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

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
  flex-wrap: wrap;
`;
