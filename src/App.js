import React, {useState} from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);
  const handleClick = () => setCounter(counter + 1);
  return <button onClick={handleClick}> {counter} </button>; //React.createElement("button", null, "{ counter }");
}

export default App;
