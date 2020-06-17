import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {Home} from "./Home";
import {Details} from "./Details";

export const Router = () => {
  return (
    <Switch>
      <Route path='/details' component={Details} />
      <Route path='/' component={Home} />
      <Redirect path='/' to='/home' />
    </Switch>
  );
};
