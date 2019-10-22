import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    { name: "Harry Potter and the Goblet of Fire", price: "$20.00", id: 0 },
    { name: "The Terminator Part III", price: "$5.00", id: 1 },
    { name: "The Dead Poets Society", price: "$2.50", id: 2 }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
