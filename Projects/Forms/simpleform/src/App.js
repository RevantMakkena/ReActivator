import React from "react";
import "./App.css";
import Form from "./form";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import UseFormHookEx from "./UseFormHookExample";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Link to='/'>Form</Link> {" | "}
        <Link to='/SimplifiedForm'>Simplified Form</Link>
        <Switch>
          <Route
            path='/SimplifiedForm'
            component={UseFormHookEx}></Route>
          <Route path='/' component={Form}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
