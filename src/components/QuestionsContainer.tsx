import { useEffect, useState } from "react";
import { DATA_URL } from "../constants/dataUrl";
import type { QuestionTypes } from "../types/QuestionTypes";
import MultipleAnswerQuestion from "./MultipleAnswerQuestion";
import style from "../styles/questions.module.scss";
import ResultsContainer from "./ResultsContainer";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";
import FinalResult from "./FinalResult";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

interface Prop {
  quizInfo: string;
}

export default function QuestionsContainer({ quizInfo }: Prop) {
  const [data, setData] = useState<QuestionTypes[]>([]);
  const [showFinalLoader, setShowFinalLoader] = useState(false);
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [restartCount, setRestartCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          DATA_URL[quizInfo as keyof typeof DATA_URL]
        );
        const data = await response.json();
        const processedResults = data.results.map((q: QuestionTypes) => {
          const allAnswers = [q.correct_answer, ...q.incorrect_answers];

          const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);
          return {
            ...q,
            isQuestionCorrect: undefined,
            selectedAnswer: undefined,
            shuffledAnswers: shuffledAnswers,
          };
        });
        setData(processedResults);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        <ErrorComponent />;
      }
    };
    fetchData();
  }, [restartCount]);

  useEffect(() => {
    if (handleRemainingQuestions() === 0 && data.length > 1) {
      setShowFinalLoader(true);
      const timeout = setTimeout(() => {
        setShowFinalLoader(false);
        setShowFinalResult(true);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [data]);

  const handleAnswer = (question: string, answer: string) => {
    console.log(question, answer);

    const updatedQuestionData = data.map((q) => {
      if (q.question === question) {
        return {
          ...q,
          isQuestionCorrect: answer === q.correct_answer,
          selectedAnswer: answer,
        };
      }
      return q;
    });

    setData(updatedQuestionData);

    console.log("AFTER CLICK", data);
  };

  const handleRemainingQuestions = () => {
    return data.filter((q) => q.isQuestionCorrect === undefined).length;
  };

  const handleCorrectAnswers = () => {
    return data.filter((q) => q.isQuestionCorrect === true).length;
  };

  const handleIncorrectAnswers = () => {
    return data.filter((q) => q.isQuestionCorrect === false).length;
  };

  const handleReset = () => {
    setShowFinalLoader(false);
    setShowFinalResult(false);
    setRestartCount((prev) => prev + 1);
  };

  return (
    <>
      <Link to="/" className={style.backBtn}>
        <i className="fas fa-arrow-left"></i> Back to main menu
      </Link>
      <h1>Welcome to the {quizInfo.replace(/([A-Z])/g, " $1")}</h1>
      <ResultsContainer
        remainingQuestions={handleRemainingQuestions()}
        correctAnswers={handleCorrectAnswers()}
        incorrectAnswers={handleIncorrectAnswers()}
        totalQuestions={data.length}
      />
      <div className={style.questionsContainer}>
        {data && data.length > 0 ? (
          data.map((questionItem) => (
            <MultipleAnswerQuestion
              questionData={questionItem}
              key={questionItem.question}
              handleAnswer={handleAnswer}
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
      {showFinalLoader && (
        <Loading
          dimensions={{ width: "150px", height: "150px", marginInline: "auto" }}
        />
      )}
      {showFinalResult && (
        <FinalResult
          handleReset={handleReset}
          totalQuestions={data.length}
          correctAnswers={handleCorrectAnswers()}
          icon={
            handleCorrectAnswers() > data.length / 2 ? (
              <DotLottieReact
                src="https://lottie.host/4831b8df-6f54-4e06-ba6e-b8ad5ca9e28d/R8AQm5hCrq.lottie"
                loop
                autoplay
              />
            ) : (
              <DotLottieReact
                src="https://lottie.host/d62b2de5-46f5-4f5d-b790-d4bf710fa41b/YOlE1COYz7.lottie"
                loop
                autoplay
              />
            )
          }
        />
      )}
    </>
  );
}
