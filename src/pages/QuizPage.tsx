import { useParams } from "react-router-dom";
import QuestionsContainer from "../components/QuestionsContainer";
import style from "../styles/pages.module.scss";
import { BANNER_IMAGES } from "../constants/bannerImages";

export default function QuizPage() {
  const { quizType } = useParams();

  const backgroundImage = BANNER_IMAGES[quizType as keyof typeof BANNER_IMAGES];

  return (
    <div
      className={style.pageContainer}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {quizType && <QuestionsContainer quizInfo={quizType} />}
    </div>
  );
}
