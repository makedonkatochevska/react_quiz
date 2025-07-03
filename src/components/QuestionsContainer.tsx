import { useEffect, useState } from "react";
import { DATA_URL } from "../constants/dataUrl";
import type { QuestionTypes } from "../types/QuestionTypes";
import MultipleAnswerQuestion from "./MultipleAnswerQuestion";
import { localData } from "../data/data";
import style from "../styles/questions.module.scss";

export default function QuestionsContainer() {
  const [data, setData] = useState<QuestionTypes[]>(localData.results);

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
  console.log("data from state", data);
  return (
    <div className={style.questionsContainer}>
      {data && data.length > 0 ? (
        data.map((questionItem) => (
          <MultipleAnswerQuestion
            questionData={questionItem}
            key={questionItem.question}
          />
        ))
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
}
