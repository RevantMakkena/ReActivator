import React from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter,
  Link,
} from "react-router-dom";
import {useAuthDataContext} from "./AuthDataProvider";
import Login from "../login/login";
import {Register} from "../register/register";
import {EmployeeHome} from "../employees/EmployeeHome";

export const Router = () => {
  return (
    <BrowserRouter>
      <Link to='/register'>Register</Link> {" | "}
      <Link to='/login'>Login</Link>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute path='/employees' component={EmployeeHome} />
        <Redirect path='/' to='/login' />
      </Switch>
    </BrowserRouter>
  );
};
