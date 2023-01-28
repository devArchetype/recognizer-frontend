import { LoadingContainer, Spinner } from './styles';

export const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner>
        <span>Carregando, por favor aguarde!</span>
      </Spinner>
    </LoadingContainer>
  );
};
