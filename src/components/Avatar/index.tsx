import { AvatarContainer, AvatarInfo } from './styles';

interface AvatarProps {
  orientation?: 'row' | 'column';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  email: string;
  name: string;
  url: string;
  align?: string;
}

export const Avatar = ({
  orientation = 'row',
  size = 'md',
  email,
  name,
  url,
  align,
}: AvatarProps) => {
  return (
    <AvatarContainer orientation={orientation} size={size}>
      <img
        src={url}
        alt={`Foto de perfil de ${name}`}
        title={`Foto de perfil de ${name}`}
        loading="lazy"
      />

      <AvatarInfo size={size} align={align || 'start'}>
        <strong>{name}</strong>
        <div>{email}</div>
      </AvatarInfo>
    </AvatarContainer>
  );
};
