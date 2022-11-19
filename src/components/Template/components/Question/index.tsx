import { AltWrapper } from './styles';

interface QuestionProps {
  data: object;
}

export const Question = ({ data }: QuestionProps) => {
  return (
    <AltWrapper>
      <div>
        <div className="space-left">.</div>

        <h4>data.</h4>
      </div>

      <div>A - B - C - D</div>
    </AltWrapper>
  );
};
