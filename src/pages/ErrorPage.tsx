import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/Routes";
import style from "../App.module.scss";

export default function ErrorPage() {
  return (
    <>
      <DotLottieReact
        src="https://lottie.host/a19a1054-7fcb-4138-a905-11e4384c99c9/Zvzn0jjVBk.lottie"
        loop
        autoplay
      />
      <Link to={ROUTES.quizPage} className={style.backBtn}>
        Back to Quiz Page
      </Link>
    </>
  );
}
