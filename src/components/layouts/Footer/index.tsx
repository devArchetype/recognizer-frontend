import { version } from '../../../../package.json'
import { FooterContainer } from './styles'

export const Footer = () => {
  return (
    <FooterContainer>
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
      <div>
        <span>v{version}</span>
      </div>
    </FooterContainer>
  )
}
