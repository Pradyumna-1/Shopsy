import React from "react";

function Interpolation() {
  let name = "Pradyumna";
  let msg = "How are you!!";
  return (
    <div>
      <h1>Hello {name} </h1>
      <img style={{ height: "80px", width: "90px" }} src="...... " alt={msg} />
    </div>
  );
}

export default Interpolation;
