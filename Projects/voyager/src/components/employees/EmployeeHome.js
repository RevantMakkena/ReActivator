import React from "react";
import {AuthDataContext} from "../shared/AuthDataProvider";
import {PrivateRoutes} from "../shared/PrivateRoutes";
import {Link, BrowserRouter} from "react-router-dom";
import "./employee.css";

export const EmployeeHome = (props) => {
  const {state, dispatch} = AuthDataContext();
  return (
    <>
      <PrivateRoutes />
    </>
  );
};
