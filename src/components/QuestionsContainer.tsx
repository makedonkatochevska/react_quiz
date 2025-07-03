import { useEffect, useState } from "react";
import { DATA_URL } from "../constants/dataUrl";
import type { QuestionTypes } from "../types/QuestionTypes";
import MultipleAnswerQuestion from "./MultipleAnswerQuestion";
import { localData } from "../data/data";
import style from "../styles/questions.module.scss";
import ResultsContainer from "./ResultsContainer";

export default function QuestionsContainer() {
  const [data, setData] = useState<QuestionTypes[]>(
    localData.results.map((q) => {
      const allAnswers = [q.correct_answer, ...q.incorrect_answers];

      const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

      return {
        ...q,
        isQuestionCorrect: undefined,
        selectedAnswer: undefined,
        shuffledAnswers: shuffledAnswers,
      };
    })
  );

  /*useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(DATA_URL);
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.log("error");
      }
    };
    fetchData();
  }, []);*/

  useEffect(() => {
    console.log("Updated data:", data);
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

  return (
    <>
      <h1>Welcome to the Movie Quiz!</h1>
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
          <p>Loading questions...</p>
        )}
      </div>
    </>
  );
}
