import styles from "../styles/resultsContainer.module.scss";

interface Prop {
  remainingQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  totalQuestions: number;
}

export default function ResultsContainer({
  remainingQuestions,
  correctAnswers,
  incorrectAnswers,
  totalQuestions,
}: Prop) {
  const answered = correctAnswers + incorrectAnswers;
  const progressPercent = (answered / totalQuestions) * 100;
  return (
    <div className={styles.container}>
      <div className={styles.resultsContainer}>
        <p>Remaining Questions: {remainingQuestions}</p>
        <p>
          Correct:{" "}
          <span className={styles.correctAnswers}>{correctAnswers}</span>
        </p>
        <p>
          Incorrect:{" "}
          <span className={styles.incorrectAnswers}>{incorrectAnswers}</span>
        </p>
      </div>

      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
