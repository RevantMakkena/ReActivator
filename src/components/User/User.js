import React, {useState, useEffect} from "react";
import {getUsers} from "../../api/userApi";
import "./User.css";
import {Link} from "react-router-dom";
import ModifyUser from "./ModifyUser";

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((_users) => {
      setUsers(_users);
    });
  }, []);

  return (
    <>
      <div className="jumbotron">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Company</th>
              <th>City</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.Id}>
                  <td>{user.FirstName}</td>
                  <td>{user.LastName}</td>
                  <td>{user.Company}</td>
                  <td>{user.City}</td>
                  <td>{user.State}</td>
                  <td>
                    <ModifyUser userData={user} />
                  </td>
                  <td>
                    <button className="btn btn-outline-primary">
                      <Link to={{pathname: "/edit", userData: {...user}}}>
                        Edit
                      </Link>
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-outline-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
