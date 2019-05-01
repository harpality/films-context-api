import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: "Bad Ronald",
      price: "$10",
      id: 1234
    },
    {
      name: "Savage Streets ",
      price: "$40",
      id: 14324
    },
    {
      name: "Over the Edge",
      price: "$20",
      id: 5332
    }
  ]);
  return (
    <div>
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
