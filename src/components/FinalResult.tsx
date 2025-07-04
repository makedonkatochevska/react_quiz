import React from "react";
import style from "../styles/finalResult.module.scss";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <div className={style.finalResultContainer}>
      <div>{icon}</div>
      <h2>Your Result</h2>
      <h3>{`${correctAnswers} / ${totalQuestions}`}</h3>
      <div className={style.btnContainer}>
        <button onClick={handleReset} className={style.btn}>
          RESTART THE QUIZ
        </button>
        <button onClick={() => navigate("/")} className={style.btn}>
          BACK TO QUIZ MENU
        </button>
      </div>
    </div>
  );
}
