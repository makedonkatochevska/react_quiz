import React from "react";
import style from "../styles/pages.module.scss";
import CardContainer from "../components/CardContainer";
interface Prop {
  background: object;
}
export default function HomePage({ background }: Prop) {
  return (
    <div className={style.pageContainer} style={background}>
      <h1>Choose the quiz</h1>
      <CardContainer />
    </div>
  );
}
