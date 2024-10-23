import React from "react";

const Accordian = (props) => {
  const { question, ans } = props;
  return (
    <div>
      <li>
       What is ? {question} {ans}
      </li>
    </div>
  );
};

export default Accordian;
