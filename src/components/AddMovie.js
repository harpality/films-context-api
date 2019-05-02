import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = event => {
    setName(event.target.value);
  };

  const updatePrice = event => {
    setPrice(event.target.value);
  };

  const addMovie = event => {
    event.preventDefault();
    setMovies(prevMovies => [...prevMovies, { name, price, id: movies.length + 1 }]);
  };

  return (
    <form onSubmit={addMovie}>
      <h3>Add a Movie</h3>
      <label htmlFor="filmName">Film Name:</label>
      <input type="text" name="name" value={name} onChange={updateName} />
      <label htmlFor="filmName">Price:</label>
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
