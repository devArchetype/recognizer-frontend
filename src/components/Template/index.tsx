import { Question } from './components/Question';

interface TemplateProps {
  exam: number;
  empty: boolean;
}

export const Template = ({ exam, empty }: TemplateProps) => {
  const data = [
    {
      question: 1,
      alternatives: [
        {
          isRight: false,
          isChecked: false,
        },
        {
          isRight: false,
          isChecked: false,
        },
        {
          isRight: false,
          isChecked: false,
        },
        {
          isRight: false,
          isChecked: true,
        },
      ],
    },
    {
      question: 2,
      alternatives: [
        {
          isRight: false,
          isChecked: false,
        },
        {
          isRight: false,
          isChecked: false,
        },
        {
          isRight: false,
          isChecked: false,
        },
        {
          isRight: false,
          isChecked: true,
        },
      ],
    },
    {
      question: 3,
      alternatives: [
        {
          isRight: false,
          isChecked: false,
        },
        {
          isRight: false,
          isChecked: false,
        },
        {
          isRight: false,
          isChecked: false,
        },
        {
          isRight: false,
          isChecked: true,
        },
      ],
    },
  ];

  const questions = data.map(function (element, index) {
    return <Question data={element} key={index} />;
  });

  return <div>{questions}</div>;
};
