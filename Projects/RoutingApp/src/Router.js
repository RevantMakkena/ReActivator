import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Cars} from "./Cars";
import {About} from "./About";
import App from "./App";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/cars' component={Cars} />
        <Route path='/about' component={About} />
        <Route path='/' component={App} />
      </Switch>
    </BrowserRouter>
  );
};
