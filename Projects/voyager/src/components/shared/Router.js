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
     <div>
      <div className='row'>
        <div className='col-sm-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>
                <i className='fas fa-binoculars displayIcons'></i>
              </h5>
              <p className='card-text'>List of employees</p>
            </div>
            <div className='card-footer'>
              <button className='btn btn-primary'>View</button>
            </div>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>
                <i className='fas fa-user-plus displayIcons'></i>
              </h5>
              <p className='card-text'>Add New Employee</p>
            </div>
            <div className='card-footer'>
              <button className='btn btn-primary'>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
