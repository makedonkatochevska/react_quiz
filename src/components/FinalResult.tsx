import React from "react";
import style from "../styles/finalResult.module.scss";

interface Prop {
  totalQuestions: number;
  correctAnswers: number;
  icon: React.ReactNode;
}

export default function FinalResult({
  totalQuestions,
  correctAnswers,
  icon,
}: Prop) {
  return (
    <div className={style.finalResultContainer}>
      <div>{icon}</div>
      <h2>Your Result</h2>
      <h3>{`${correctAnswers} / ${totalQuestions}`}</h3>
    </div>
  );
}
