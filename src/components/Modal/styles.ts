import styled from 'styled-components';

interface DialogProps {
  isVisible: boolean;
}

export const Overlay = styled.div<DialogProps>`
  display: ${(props) => (props.isVisible ? 'grid' : 'none')};
  place-items: center;
  position: fixed;
  inset: 0;
  z-index: 999;
  animation: fadeIn ease-in 0.4s;
  background-color: ${(props) => props.theme.color['base-dark-translucent']};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const Dialog = styled.section`
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
  padding: ${(props) => props.theme.spacing.md};
  animation: slideottomToTop ease-in 0.3s;
  border-radius: ${(props) => props.theme.rounded.base};
  box-shadow: ${(props) => props.theme.shadow.base};
  background-color: ${(props) => props.theme.color['base-light']};

  @keyframes slideottomToTop {
    from {
      transform: translateY(200%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px ${(props) => props.theme.color['base-200']};

  h2 {
    font-size: ${(props) => props.theme.text.xl};
    font-weight: ${(props) => props.theme.font.medium};
    color: ${(props) => props.theme.color['base-900']};
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap-reverse;
  gap: ${(props) => props.theme.spacing.xs};
`;
