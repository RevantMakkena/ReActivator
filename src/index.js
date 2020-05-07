import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AuthorQuizEntry from "./AuthorQuiz/AuthorQuizEntry";

function Render() {
  ReactDOM.render(
    <React.StrictMode>
      <>
        <AuthorQuizEntry />
      </>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

Render();
export default Render;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
