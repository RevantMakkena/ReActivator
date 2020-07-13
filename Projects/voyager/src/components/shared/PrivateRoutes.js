import React from "react";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import {EmployeeList} from "../employees/EmployeeList";
import {AddEditEntry} from "../employees/AddEditEntry";

export const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Link to='/employees'>View Employees</Link>
      {"  |  "}
      <Link to='/add'>Add Employee</Link>
      <Switch>
        <Route path='/employees' component={EmployeeList} />
        <Route path='/edit/:id' component={AddEditEntry} />
        <Route path='/add' component={AddEditEntry} />
      </Switch>
    </BrowserRouter>
  );
};
