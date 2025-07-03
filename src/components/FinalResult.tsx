import React from "react";
import style from "../styles/finalResult.module.scss";

interface Prop {
  totalQuestions: number;
  correctAnswers: number;
  icon: React.ReactNode;
  handleReset: () => void;
}

export default function FinalResult({
  totalQuestions,
  correctAnswers,
  icon,
  handleReset,
}: Prop) {
  return (
    <div className={style.finalResultContainer}>
      <div>{icon}</div>
      <h2>Your Result</h2>
      <h3>{`${correctAnswers} / ${totalQuestions}`}</h3>
      <button onClick={handleReset} className={style.restartBtn}>
        START NEW QUIZ
      </button>
    </div>
  );
}
