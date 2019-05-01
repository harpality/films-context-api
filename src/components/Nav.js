import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <nav>
      <div className="nav-items">
        <h3>Rare Film Archive</h3>
        <p>List of Films: {movies.length}</p>
      </div>
    </nav>
  );
};

export default Nav;
