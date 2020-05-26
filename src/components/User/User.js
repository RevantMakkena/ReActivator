import React, {useState, useEffect} from "react";
import {getUsers, deleteUser} from "../../api/userApi";
import "./User.css";
import {Link} from "react-router-dom";
import ModifyUser from "./ModifyUser";

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
    });
  }, []);

  function onUserDelete(id) {
    if (deleteUser(id)) {
      getUsers().then((res) => {
        setUsers(res);
      });
    }
  }

  return (
    <>
      <div className='jumbotron'>
        <table className='table table-hover'>
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
                <tr key={user.id}>
                  <td>{user.FirstName}</td>
                  <td>{user.LastName}</td>
                  <td>{user.Company}</td>
                  <td>{user.City}</td>
                  <td>{user.State}</td>
                  <td>
                    <ModifyUser userData={user} />
                  </td>
                  <td>
                    <button className='btn btn-outline-primary'>
                      <Link
                        to={{pathname: "/edit", userData: {...user}}}>
                        Edit
                      </Link>
                    </button>
                  </td>
                  <td>
                    <button
                      className='btn btn-outline-danger'
                      onClick={() => onUserDelete(user.id)}>
                      Delete
                    </button>
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
