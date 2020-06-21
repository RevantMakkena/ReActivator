import React, {useState, useEffect} from "react";

import {getAll} from "./BooksApi.js";

export const GetBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await getAll();
      setBooks(res);
    };
    fetchBooks();
  }, [books]);

  return (
    <>
      {books
        ? books.map((book) => {
            return (
              <table>
                <tbody>
                  <tr>{book.id}</tr>
                </tbody>
              </table>
            );
          })
        : ""}
    </>
  );
};
