import React, {useState, useEffect} from "react";

import {getAll} from "./UsersApi.js";

export const GetUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getAll();
      setUsers(res);
    };
    fetchUsers();
  }, [users]);

  return (
    <>
      {users
        ? users.map((user) => {
            return (
              <table>
                <tbody>
                  <tr>{JSON.stringify(user)}</tr>
                </tbody>
              </table>
            );
          })
        : ""}
    </>
  );
};
