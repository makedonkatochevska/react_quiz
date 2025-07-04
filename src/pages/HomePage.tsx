import style from "../styles/pages.module.scss";
import CardContainer from "../components/CardContainer";
import useSound from "../utils/useSound";
interface Prop {
  background: object;
}
export default function HomePage({ background }: Prop) {
  const buttonSound = () => {
    console.log("btn clicked");
    const playWrong = useSound("../../public/Sounds/correctSound.wav");

    playWrong(); // on correct answer
  };
  return (
    <div className={style.pageContainer} style={background}>
      <h1>Choose the quiz</h1>
      <CardContainer />
      <button onClick={buttonSound}>Play sound</button>
    </div>
  );
}
