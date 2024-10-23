import React from "react";
import Accordian from "./Accordian";

function Details() {
  const questions = ["What is HTML?", "What is CSS?", "What is JS?"];
  const answers = [
    "HTML stands for HyperText Markup Language.",
    "CSS stands for Cascading Style Sheets.",
    "JS stands for JavaScript.",
  ];

  return (
    <>
      <ul>
        {questions.map((question, index) => (
          <Accordian item={question} ans={answers[index]} key={index} />
        ))}
      </ul>
    </>
  );
}

export default Details;
