import styled from 'styled-components';

export const NotFoundPageContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.spacing.md};
`;

export const Dialog = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.rounded.base};
  box-shadow: ${(props) => props.theme.shadow.base};
  background-color: ${(props) => props.theme.color['base-light']};

  @media ${(props) => props.theme.screen.sm} {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
  text-align: center;

  h1 {
    font-size: ${(props) => props.theme.text.xxl};
    font-weight: ${(props) => props.theme.font.medium};
    color: ${(props) => props.theme.color['base-900']};
  }

  h2 {
    margin-right: auto;
  }

  img:last-child {
    width: clamp(240px, 15vw, 40vw);
    height: clamp(240px, 15vw, 40vw);
  }
`;
