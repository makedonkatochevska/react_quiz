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
  function decodeHtml(html: string) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

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
      {decodeHtml(questionData.question)}
      <div className={style.answerButtonContainer}>
        {questionData.shuffledAnswers.map((answer, index) => {
          return (
            <button
              key={`${answer}${index}`}
              className={style.answerButton}
              onClick={() => {
                handleAnswer(questionData.question, answer);
              }}
              disabled={questionData.isQuestionCorrect !== undefined}
              style={{
                backgroundColor:
                  questionData.selectedAnswer === answer ? "white" : undefined,
                cursor:
                  questionData.isQuestionCorrect !== undefined
                    ? "not-allowed"
                    : "pointer",
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
