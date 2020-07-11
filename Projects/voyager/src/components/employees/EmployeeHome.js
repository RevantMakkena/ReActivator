import React from "react";
import {AuthDataContext} from "../shared/AuthDataProvider";

export const EmployeeHome = () => {
  const {state, dispatch} = AuthDataContext();
  return <div>EMP List</div>;
};
