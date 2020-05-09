import React from "react";
import ReactDOM from "react-dom";
import {Route, BrowserRouter} from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AuthorQuizEntry from "./AuthorQuiz/AuthorQuizEntry";
import AddNewAuthor from "./AuthorQuiz/AddNewAuthor";
import JsWorks from "./JSWorks/WorkWithObjects";
import AppEntry from "./AppEntry";

function Render() {
  ReactDOM.render(
    <React.StrictMode>
      <>
        <BrowserRouter>
          <React.Fragment>
            <Route exact path='/' component={AppEntry} />
            <Route path='/authorQuiz' component={AuthorQuizEntry} />
            <Route path='/add' component={AddNewAuthor} />
            <Route path='/getEmployees' component={JsWorks} />
          </React.Fragment>
        </BrowserRouter>
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
