import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Login from "./components/login/login";
import {Register} from "./components/register/register";

function App() {
  return (
    <BrowserRouter>
      <Link to='/register'>Register</Link> {" | "}
      <Link to='/login'>Login</Link>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
