import React, { useContext } from "react";
import Movie from "./Movie.js";
import { MovieContext } from "./MovieContext";
import AddMovie from "./AddMovie";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center",
        flexDirection: "column",
        width: "100%"
      }}
    >
      <h2>My Movies!!</h2>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%"
        }}
      >
        {movies.map((movie, index) => (
          <li
            style={{
              listStyle: "none",
              margin: "20px"
            }}
            key={movie.id}
          >
            {<Movie {...movie} index={index} setMovies={setMovies} />}
          </li>
        ))}
      </ul>
      <AddMovie />
    </div>
  );
};

export default MovieList;
