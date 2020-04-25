import App from "./App";
import Display from "./display";
import React, {useState} from "react";

function Main() {
  const [counter, setCounter] = useState(22);
  const counterIncrement = (incValue) => setCounter(counter + incValue);
  return (
    <div>
      <App setValue={counterIncrement} incVal={1}></App>
      <App setValue={counterIncrement} incVal={5}></App>
      <App setValue={counterIncrement} incVal={10}></App>
      <App setValue={counterIncrement} incVal={20}></App>
      <Display message={counter}></Display>
    </div>
  );
}
export default Main;
