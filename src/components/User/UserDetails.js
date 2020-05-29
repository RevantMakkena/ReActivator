import React, {useState, useEffect} from "react";
import {editUser} from "../../api/userApi";

export default function UserDetails(props) {
  const {id} = props.match.params;
  const [user, setUser] = useState({});

  useEffect(() => {
    editUser(id).then((_usr) => {
      setUser(_usr);
    });
  }, []);

  return user ? (
    <>
      <div>User Details:</div>
      {JSON.stringify(user)}
      <div className='table-light'>
        <table>
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.FirstName}</td>
              <td>{user.LastName}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <span>Loading user data...</span>
  );
}
