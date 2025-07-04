import Card from "./Card";
import style from "../styles/cards.module.scss";

import { BANNER_IMAGES } from "../constants/bannerImages";
import { useNavigate } from "react-router-dom";

export default function CardContainer() {
  const navigate = useNavigate();

  return (
    <div className={style.cardsContainer}>
      <Card
        title="Movie Quiz"
        background={{ backgroundImage: `url(${BANNER_IMAGES.movieQuiz})` }}
        onClick={() => navigate("/quiz/movieQuiz")}
      />
      <Card
        title="TV Quiz"
        background={{ backgroundImage: `url(${BANNER_IMAGES.tvQuiz})` }}
        onClick={() => navigate("/quiz/tvQuiz")}
      />

      <Card
        title="Books Quiz"
        background={{ backgroundImage: `url(${BANNER_IMAGES.booksQuiz})` }}
        onClick={() => navigate("/quiz/booksQuiz")}
      />
      <Card
        title="Computer Science Quiz"
        background={{
          backgroundImage: `url(${BANNER_IMAGES.computerScienceQuiz})`,
        }}
        onClick={() => navigate("/quiz/computerScienceQuiz")}
      />
      <Card
        title="Celebrities Quiz"
        background={{
          backgroundImage: `url(${BANNER_IMAGES.celebritiesQuiz})`,
        }}
        onClick={() => navigate("/quiz/celebritiesQuiz")}
      />
      <Card
        title="History Quiz"
        background={{ backgroundImage: `url(${BANNER_IMAGES.historyQuiz})` }}
        onClick={() => navigate("/quiz/historyQuiz")}
      />
    </div>
  );
}
