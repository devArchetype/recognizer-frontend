export const getAnserwersLetters = (answersAmount: number) => {
  const answers = Array.from(Array(answersAmount).keys());
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return answers.map((answer) => alphabet[answer]);
};
