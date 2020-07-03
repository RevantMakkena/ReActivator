import React, {useState, useEffect} from "react";

import {getAll, deleteUserApi, getUser} from "./UsersApi.js";
import {TableComponent} from "./TableComponent";
import {ToastContainer, toast} from "react-toastify";

export const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getAll();
      setUsers(res);
    };
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    const isUserDeleted = await deleteUserApi(id);

    if (isUserDeleted === 200) {
      const getRefreshedUsers = await getAll();
      setUsers(getRefreshedUsers);
    }
  };

  return (
    <>
      {users ? (
        <TableComponent
          users={users}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          page={page}
          rowsPerPage={rowsPerPage}
          deleteUser={deleteUser}
        />
      ) : (
        ""
      )}
    </>
  );
};
