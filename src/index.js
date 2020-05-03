import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import AuthorQuiz from "./AuthorQuiz/AuthorQuiz";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import currState from "./AuthorQuizData";

ReactDOM.render(
  <React.StrictMode>
    <>
      <AuthorQuiz {...currState} />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
