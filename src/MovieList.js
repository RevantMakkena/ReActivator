import React, {useState} from "react";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      id: "1",
    },
    {
      name: "BattleField",
      id: "2",
    },
  ]);

  return (
    <>
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </>
  );
};

export default MovieList;
