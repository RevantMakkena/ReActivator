import React from "react";
import {EmployeeHome} from "../employees/EmployeeHome";
import {useState} from "react";
import {EmployeeList} from "../employees/EmployeeList";

export const HomePage = () => {
  return (
    <div className='row' style={{width: "100%"}}>
      <EmployeeHome />
    </div>
  );
};
