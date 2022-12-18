import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: ${(props) => props.theme.color['base-dark-translucent']};
`;

export const Container = styled(Dialog.Content)`
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 60;
  transform: translate(-50%, -50%);
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.rounded.base};
  box-shadow: ${(props) => props.theme.shadow.base};
  background-color: ${(props) => props.theme.color['base-light']};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
