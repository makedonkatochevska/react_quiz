import type { QuestionTypes } from "../types/QuestionTypes";
import style from "../styles/questions.module.scss";

interface Props {
  questionData: QuestionTypes;
  handleAnswer: (question: string, answer: string) => void;
}

export default function MultipleAnswerQuestion({
  questionData,
  handleAnswer,
}: Props) {
  return (
    <div
      className={style.question}
      style={{
        borderColor:
          questionData.isQuestionCorrect !== undefined
            ? questionData.isQuestionCorrect
              ? "green"
              : "red"
            : undefined,
      }}
    >
      {questionData.question}
      <div className={style.answerButtonContainer}>
        {questionData.shuffledAnswers.map((answer) => {
          return (
            <button
              className={style.answerButton}
              onClick={() => {
                handleAnswer(questionData.question, answer);
              }}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
}
