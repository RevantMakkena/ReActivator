import React, {useState, useEffect} from "react";
import {getUsers} from "../api/userApi";
import {getEmployees} from "../api/employeeApi";

export default function User() {
  const [users, setUsers] = useState([]);
  const [emps, setEmps] = useState([]);

  useEffect(() => {
    getUsers((_users) => {
      console.log(JSON.stringify(_users));
      setUsers(_users);
    });
  }, [users]);

  useEffect(() => {
    getEmployees((_users) => {
      console.log(JSON.stringify(_users));
      setEmps(_users);
    });
  }, [emps]);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>LastName</th>
            <th>Gender</th>
            <th>Race</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.Id}>
                <td>{user.LastName}</td>
                <td>{user.Gender}</td>
                <td>{user.Race}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
