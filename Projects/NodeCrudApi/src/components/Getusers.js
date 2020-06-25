import React, {useState, useEffect} from "react";

import {getAll} from "./UsersApi.js";
import {TableComponent} from "./TableComponent";

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
  }, [users]);

  return (
    <>
      {users ? (
        <TableComponent
          users={users}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          page={page}
          rowsPerPage={rowsPerPage}
        />
      ) : (
        ""
      )}
    </>
  );
};
