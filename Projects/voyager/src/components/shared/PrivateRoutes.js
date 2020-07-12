import React from "react";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import {EmployeeList} from "../employees/EmployeeList";
import {EditEmployee} from "../employees/EditEmployee";

export const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Link to='/employees'>View Employees</Link>
      {"  |  "}
      <Link to='/add'>Add Employee</Link>
      <Switch>
        <Route path='/employees' component={EmployeeList} />
        <Route path='/edit/:id' component={EditEmployee} />
        <Route path='/add' component={EditEmployee} />
      </Switch>
    </BrowserRouter>
  );
};
