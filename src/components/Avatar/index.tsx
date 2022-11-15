import { AvatarContainer, AvatarInfo } from './styles'

interface AvatarProps {
  orientation?: 'row' | 'column'
  size?: 'sm' | 'md' | 'lg'
  email: string
  name: string
  url: string
}

export const Avatar = ({
  orientation = 'row',
  size = 'md',
  email,
  name,
  url,
}: AvatarProps) => {
  return (
    <AvatarContainer orientation={orientation} size={size}>
      <img src={url} alt={`Foto de perfil de ${name}`} loading="lazy" />

      <AvatarInfo size={size}>
        <h4>{name}</h4>
        <div>{email}</div>
      </AvatarInfo>
    </AvatarContainer>
  )
}
