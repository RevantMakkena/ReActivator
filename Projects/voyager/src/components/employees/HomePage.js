import React from "react";
import {EmployeeHome} from "./EmployeeHome";
import {useState} from "react";
import {EmployeeList} from "./EmployeeList";

export const HomePage = () => {
  return (
    <div className='row' style={{width: "100%"}}>
      <EmployeeHome />
    </div>
  );
};
