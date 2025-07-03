import { useParams } from "react-router-dom";
import QuestionsContainer from "../components/QuestionsContainer";
import style from "../styles/pages.module.scss";

export default function QuizPage() {
  const { quizType } = useParams();
  return (
    <div className={style.pageContainer}>
      {quizType && <QuestionsContainer quizInfo={quizType} />}
    </div>
  );
}
