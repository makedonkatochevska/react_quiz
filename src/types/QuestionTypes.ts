export type QuestionTypes = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  isQuestionCorrect?: boolean;
  shuffledAnswers: string[];
};
