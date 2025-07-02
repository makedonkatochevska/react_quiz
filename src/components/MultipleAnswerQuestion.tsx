import type { QuestionTypes } from "../types/QuestionTypes";
import style from "../styles/questions.module.scss";

interface Props {
  data: QuestionTypes;
}

export default function MultipleAnswerQuestion({ data }: Props) {
  const answers = [data.correct_answer, ...data.incorrect_answers];
  return (
    <div className={style.question}>
      {data.question}
      <div className={style.answerButtonContainer}>
        {answers.map((answer) => {
          return <button className={style.answerButton}>{answer}</button>;
        })}
      </div>
    </div>
  );
}
