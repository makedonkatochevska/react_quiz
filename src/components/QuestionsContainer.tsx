import { useEffect, useState } from "react";
import { DATA_URL } from "../constants/dataUrl";

export default function QuestionsContainer() {
  const [data, setData] = useState("");

  useEffect(() => {
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
  }, []);
  console.log("data from state", data);
  return <div></div>;
}
