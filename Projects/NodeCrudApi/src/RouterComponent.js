import React from "react";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import "./App.css";
import App from "./App";
import {GetUsers} from "./components/Getusers";

export const RouterComponent = () => {
  return (
    <>
      <BrowserRouter>
        <div className='navbar'>
          <Link to='/'>Home</Link>
          {" | "}
          <Link to='/users'>All Users</Link>
        </div>
        <Switch>
          <Route path='/users' component={GetUsers} />
          <Route path='/' component={App} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
