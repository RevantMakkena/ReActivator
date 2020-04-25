import React from "react";
import "./App.css";

function App(props) {
  const handleClick = () => props.setValue(props.incVal);
  return <button onClick={handleClick}> +{props.incVal} </button>;
}

export default App;
