import style from "../styles/cards.module.scss";

interface Prop {
  background: object;
  title: string;
  onClick: () => void;
}

export default function Card({ background, title, onClick }: Prop) {
  return (
    <div className={style.card} style={background} onClick={onClick}>
      <h3>{title}</h3>
    </div>
  );
}
