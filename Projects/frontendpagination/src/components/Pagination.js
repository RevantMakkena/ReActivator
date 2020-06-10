import React from "../../node_modules/@types/react";
import Pagination from "../../node_modules/@material-ui/lab/Pagination";

export const PaginationComponent = ({
  postsPerPage,
  totalPosts,
  paginate,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleChangePage = (event) => {
    debugger;
    paginate(event.target.innerText);
  };

  return (
    <>
      <Pagination
        style={{marginTop: "10px", marginLeft: "25%"}}
        count={pageNumbers.length}
        onClick={handleChangePage}
        variant='outlined'
        color='secondary'
        shape='rounded'
      />
    </>
  );
};
