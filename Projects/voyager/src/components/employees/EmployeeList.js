import React from "react";
import {GetAllEmployees} from "../api/EmployeeApi";
import {useEffect} from "react";
import {useState} from "react";
import {AuthDataContext} from "../shared/AuthDataProvider";
import {EMP_URL} from "../../config";

export const EmployeeList = () => {
  const {state, dispatch} = AuthDataContext();
  const [emps, setEmps] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await GetAllEmployees(
        state.user.email,
        state.token
      );

      if (res) setEmps(res);
      else {
        //do Nothing
      }
    }
    fetchData();
  }, []);

  return emps ? (
    <table className='table'>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {emps.map((_employee) => {
          return (
            <tr>
              <td>{_employee.FirstName}</td>
              <td>{_employee.LastName}</td>
              <td>{_employee.Email}</td>
              <td>{_employee.Country}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    ""
  );
};
