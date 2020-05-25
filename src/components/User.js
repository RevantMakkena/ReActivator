import React, {useState, useEffect} from "react";
import {getUsers} from "../api/userApi";

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((_users) => {
      setUsers(_users);
    });
  }, [users]);

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
