import React, {useState, useEffect} from "react";
import {getUsers} from "../api/userApi";
import {getCourses} from "../api/courseApi";

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers((_users) => setUsers(_users));
  }, [users]);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.First_Name}>
                <td>{user.Last_Name}</td>
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
