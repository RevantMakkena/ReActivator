import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Cars} from "./components/Cars";
import {About} from "./components/About";
import App from "./components/AppComponent/App";
import {Products} from "./components/Products";
import {Main} from "./components/Main";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/cars' component={Cars} />
        <Route path='/about' component={About} />
        <Route path='/products' component={Products} />
        <Route path='/App' component={App} />
      </Switch>
    </BrowserRouter>
  );
};
