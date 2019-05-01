import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "Bad Ronald",
      price: "$10",
      id: 1
    },
    {
      name: "Savage Streets",
      price: "$40",
      id: 2
    },
    {
      name: "Over the Edge",
      price: "$20",
      id: 3
    }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>{props.children}</MovieContext.Provider>
  );
};
