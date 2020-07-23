import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {Notes} from "./components/notes";
import {ToolkitNotes} from "./components/ToolkitNotes";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to='/ReduxNotes'>Notes (Redux)</Link>
      {" | "}
      <Link to='/ReduxToolkitNotes'>Notes (Redux Toolkit)</Link>
      <Switch>
        <Route component={Notes} path='/ReduxNotes' />
        <Route component={ToolkitNotes} path='/ReduxToolkitNotes' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
