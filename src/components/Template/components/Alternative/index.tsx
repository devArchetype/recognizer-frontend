import { useState } from 'react';
import { AltInput, AltLabel, AltList, AltWrapper } from './styles';

import { QuestionProps } from '../Question';

export const Alternative = ({ question, empty }: QuestionProps) => {
  const altList = question.alternatives;

  const [alternative, setAlternative] = useState(question.isRight);

  function changeAlternative(value: string) {
    let alt = value;
    if (alternative === alt) {
      setAlternative('');
      alt = '';
    } else {
      setAlternative(alt);
    }
    question.marked = alt;
  }

  return (
    <AltWrapper>
      {altList.map((alt: string) => {
        const id = question.number + 'alternative' + alt;
        const name = 'alternative ' + alt;

        return (
          <AltList key={id}>
            <AltInput
              type="checkbox"
              name={name}
              id={id}
              value={alt}
              checked={question.marked === alt}
              isRight={alt === question.isRight}
              correctOption={
                question.marked !== alt && alt === question.isRight
              }
              onChange={(event) => changeAlternative(event.target.value)}
              disabled={!empty}
            />
            <AltLabel title={name} htmlFor={id}>
              {alt}
            </AltLabel>
          </AltList>
        );
      })}
    </AltWrapper>
  );
};
