import React, {useState, createContext} from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "10$",
      id: "1",
    },
    {
      name: "BattleField",
      id: "2",
      price: "5$",
    },
  ]);

  //   const addMovies = ({name, price}) => {
  //     const newId = movies.length + 1;
  //     const newMovie = {name: name, price: price, id: newId};
  //     setMovies([...movies, newMovie]);
  //   };
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
