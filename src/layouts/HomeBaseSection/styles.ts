import styled from 'styled-components';

export const HomeBaseSectionContainer = styled.section`
  width: 100%;
  max-width: 1024px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xl};
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.md};
`;

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};

  h2,
  p {
    width: clamp(15rem, 70vw, 35rem);
    text-align: center;
  }

  h2 {
    font-size: ${(props) => props.theme.text.xxl};
    font-weight: ${(props) => props.theme.font.bold};
    color: ${(props) => props.theme.color['base-900']};
    line-height: 2rem;
    text-shadow: ${(props) => props.theme.shadow.lg};
  }
`;
