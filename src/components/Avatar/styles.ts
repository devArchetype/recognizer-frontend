import styled from 'styled-components';

interface AvatarInfoProps {
  size: 'sm' | 'md' | 'lg';
}

interface AvatarContainerProps extends AvatarInfoProps {
  orientation: 'row' | 'column';
}

const sizes = {
  sm: '2rem',
  md: '4rem',
  lg: '6rem',
};

export const AvatarContainer = styled.article<AvatarContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => props.orientation};
  gap: ${(props) => props.theme.spacing.xs};

  img {
    width: ${(props) => sizes[props.size]};
    height: ${(props) => sizes[props.size]};
    border-radius: ${(props) => props.theme.rounded.full};
  }
`;

export const AvatarInfo = styled.div<AvatarInfoProps>`
  display: flex;
  align-items: start;
  flex-direction: column;
  line-height: 100%;

  strong {
    color: ${(props) => props.theme.color['base-900']};
    font-weight: ${(props) => props.theme.font.medium};
  }

  div {
    line-height: 100%;
    font-size: ${(props) => props.theme.text.sm};
    color: ${(props) => props.theme.color['base-500']};
  }
`;
