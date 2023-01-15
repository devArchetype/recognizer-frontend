import { ImageContainer, LogoContainer } from './styles';

export const Logo = () => {
  return (
    <LogoContainer title="Recognizer">
      <ImageContainer>
        <img src="/images/logo.svg" alt="Recognize 'R' logo" loading="lazy" />
        <span>R</span>
      </ImageContainer>

      <span>ecognizer</span>
    </LogoContainer>
  );
};
