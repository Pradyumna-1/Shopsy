
import React, { useState } from "react";

function Form() {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [submittedUsername, setSubmittedUsername] = useState(""); 
  const [submittedPassword, setSubmittedPassword] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmittedUsername(username);
    setSubmittedPassword(password);

    setUsername("");
    setPassword("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Enter your name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" style={{ color: "white", margin: "20px" }}>
          Submit
        </button>
      </form>

      <h3>Submitted Data:</h3>
      <p>Username: {submittedUsername}</p>
      <p>Password: {submittedPassword}</p>
    </>
  );
}

export default Form;
