import { Link } from "react-router-dom";
import { ROUTES } from "../routes/Routes";
import style from "../App.module.scss";
import ErrorComponent from "../components/ErrorComponent";

export default function ErrorPage() {
  return (
    <>
      <ErrorComponent />
      <Link to={ROUTES.quizPage} className={style.backBtn}>
        Back to Quiz Page
      </Link>
    </>
  );
}
