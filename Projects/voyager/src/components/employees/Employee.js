import React from "react";
import {Paper} from "@material-ui/core";
import {Link} from "react-router-dom";

export const Employee = ({employees, deleteEmp}) => {
  function deleteEmployee(e) {}

  return (
    <>
      {employees.map((emp) => {
        return (
          <Paper
            key={emp.id}
            style={{
              padding: "15px",
              marginTop: "10px",
            }}>
            <div className='row'>
              <div className='col'>{emp.FirstName}</div>
              <div className='col'>{emp.LastName}</div>
              <div className='col'>{emp.City}</div>
              <div className='col'>{emp.State}</div>
              <div className='col'>
                <Link to={`/edit/${emp.id}`}>
                  <button className='btn btn-primary'>Edit</button>
                </Link>
              </div>
              <div className='col'>
                <button
                  className='btn btn-danger'
                  id={emp.id}
                  onClick={() => deleteEmp(emp.id)}>
                  Delete
                </button>{" "}
              </div>
            </div>
          </Paper>
        );
      })}
    </>
  );
};
