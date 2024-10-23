import React, { useState } from "react";

function Increment_Decrement() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
   if(count>0){
    setCount(count - 1);
   }
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment} style={{ color: "white", margin: "20px" }}>
        Increment
      </button>
      <button onClick={decrement} style={{ color: "white" }}>
        Decrement
      </button>
    </>
  );
}

export default Increment_Decrement;
