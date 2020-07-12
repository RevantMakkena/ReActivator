import React from "react";
import {Pagination} from "@material-ui/lab";

export const PaginationFooter = ({
  empPerPage,
  totalEmps,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEmps / empPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleChangePage = (event) => {
    paginate(event.target.innerText);
  };

  return (
    <>
      <Pagination
        style={{marginTop: "10px", marginLeft: "5%"}}
        count={pageNumbers.length}
        onClick={handleChangePage}
        variant='outlined'
        color='secondary'
        shape='rounded'
      />
    </>
  );
};
