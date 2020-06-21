import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {Home} from "./Home";
import {Details} from "./Details";
import SignInForm from "./SignIn";
import {useAuthDataContext} from "./AuthDataProvider";

const PrivateRoute = ({component, ...options}) => {
  debugger;
  const {user} = useAuthDataContext();
  const finalComponent = user ? component : SignInForm;

  return <Route {...options} component={finalComponent} />;
};

export const Router = () => {
  return (
    <Switch>
      <PrivateRoute path='/home' component={Home} />
      <PrivateRoute path='/details' component={Details} />
      <Redirect path='/' to='/home' />
    </Switch>
  );
};
