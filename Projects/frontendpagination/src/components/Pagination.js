import React from "react";

export const Pagination = ({postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <ul className='pagination'>
          {pageNumbers.map((pageNumber) => {
            return (
              <li key={pageNumber} className='page-item'>
                <a
                  href='#'
                  onClick={() => {
                    paginate(pageNumber);
                  }}
                  className='page-link'>
                  {pageNumber}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
