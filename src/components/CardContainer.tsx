import React from "react";
import Card from "./Card";
import style from "../styles/cards.module.scss";

import banner from "../assets/images/moviesBanner.jpg";
import { BANNER_IMAGES } from "../constants/bannerImages";

export default function CardContainer() {
  return (
    <div className={style.cardsContainer}>
      <Card
        title="Movie Quiz"
        background={{ backgroundImage: `url(${BANNER_IMAGES.movieQuiz})` }}
      />
      <Card
        title="TV Quiz"
        background={{ backgroundImage: `url(${BANNER_IMAGES.tvQuiz})` }}
      />
      <Card
        title="Books Quiz"
        background={{ backgroundImage: `url(${BANNER_IMAGES.tvQuiz})` }}
      />
      <Card
        title="Computer Science Quiz"
        background={{
          backgroundImage: `url(${BANNER_IMAGES.computerScienceQuiz})`,
        }}
      />
      <Card
        title="Celebrities Quiz"
        background={{
          backgroundImage: `url(${BANNER_IMAGES.celebritiesQuiz})`,
        }}
      />
      <Card
        title="History Quiz"
        background={{ backgroundImage: `url(${BANNER_IMAGES.historyQuiz})` }}
      />
    </div>
  );
}
