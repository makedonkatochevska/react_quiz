import QuestionsContainer from "../components/QuestionsContainer";
import style from "../styles/quizPage.module.scss";

export default function QuizPage() {
  return (
    <div className={style.pageContainer}>
      <QuestionsContainer />
    </div>
  );
}
