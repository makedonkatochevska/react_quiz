import styles from "../styles/resultsContainer.module.scss";

interface Prop {
  remainingQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
}

export default function ResultsContainer({
  remainingQuestions,
  correctAnswers,
  incorrectAnswers,
}: Prop) {
  return (
    <div className={styles.resultsContainer}>
      <p>Remaining Questions: {remainingQuestions}</p>
      <p>Correct: {correctAnswers}</p>
      <p>Incorrect: {incorrectAnswers}</p>
    </div>
  );
}
