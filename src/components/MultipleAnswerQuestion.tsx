import type { QuestionTypes } from "../types/QuestionTypes";
import style from "../styles/questions.module.scss";

interface Props {
  questionData: QuestionTypes;
}

export default function MultipleAnswerQuestion({ questionData }: Props) {
  const answers = [
    questionData.correct_answer,
    ...questionData.incorrect_answers,
  ];
  return (
    <div className={style.question}>
      {questionData.question}
      <div className={style.answerButtonContainer}>
        {answers.map((answer) => {
          return <button className={style.answerButton}>{answer}</button>;
        })}
      </div>
    </div>
  );
}
