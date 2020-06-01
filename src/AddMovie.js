import React, {useState, useContext} from "react";
import {MovieContext} from "./MovieListContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      {name: name, price: price, id: movies.length + 1},
    ]);
    console.log("Hiyeeee");
  };

  return (
    <>
      <form>
        <label>Movie Name</label>
        <input
          type='text'
          name='Movie name'
          value={name}
          onChange={updateName}
        />
        <br />
        <label>Movie Price</label>
        <input
          type='text'
          name='Price'
          value={price}
          onChange={updatePrice}
        />
        <br />
        <button type='button' name='submit' onClick={addMovie}>
          Submit
        </button>
      </form>
    </>
  );
};

export default AddMovie;
