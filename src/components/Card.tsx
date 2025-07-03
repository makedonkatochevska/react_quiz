import React from "react";
import style from "../styles/cards.module.scss";

interface Prop {
  background: object;
  title: string;
}

export default function Card({ background, title }: Prop) {
  return (
    <div className={style.card} style={background}>
      <h3>{title}</h3>
    </div>
  );
}
