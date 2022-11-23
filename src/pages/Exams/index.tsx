import { ExamsPageContainer } from './styles';

interface ExamsProps {
  examName: string;
  group: string;
}

export const Exams = ({ examName, group }: ExamsProps) => {
  return (
    <ExamsPageContainer heading={examName + ' - ' + group}>
      <h1>Hello, World!</h1>
    </ExamsPageContainer>
  );
};
