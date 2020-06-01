import React, {useContext} from "react";
import {MovieContext} from "./MovieListContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <>
      <h4>Number of Movies : {movies.length}</h4>
    </>
  );
};

export default Nav;
