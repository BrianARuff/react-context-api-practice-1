import React from "react";
import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext.js";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <MovieProvider>
        <Nav />
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
