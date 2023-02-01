import { version } from '../../../../../package.json';
import { FooterContainer, FooterWrapper } from './styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <div>
          <a
            href="https://github.com/devArchetype"
            target="_blank"
            rel="noreferrer"
          >
            devArchetype
          </a>
          <span>&copy; 2022</span>
        </div>
        <span>v{version}</span>
      </FooterWrapper>
    </FooterContainer>
  );
};
