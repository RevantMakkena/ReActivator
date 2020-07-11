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
import {EmployeeList} from "../employees/EmployeeList";

const PrivateRoute = ({component, ...options}) => {
  debugger;
  const {user} = useAuthDataContext();
  const finalComponent = user ? component : Login;

  return <Route {...options} component={finalComponent} />;
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Link to='/register'>Register</Link> {" | "}
      <Link to='/login'>Login</Link>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute path='/employees' component={EmployeeList} />
        <Redirect path='/' to='/login' />
      </Switch>
    </BrowserRouter>
  );
};
