import React, { useContext } from "react";
import { MovieContext } from "./MovieContext.js";

const Nav = props => {
  const [movies] = useContext(MovieContext);

  return (
    <div
      style={{
        background: "black",
        color: "#fff",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
      }}
    >
      <h1 style={{ fontWeight: "bolder", alignSelf: "center" }}>
        My Movies Count:{" "}
      </h1>
      <p
        style={{ padding: "0 1.6rem", fontSize: "32px", fontWeight: "bolder" }}
      >
        {movies.length}
      </p>
    </div>
  );
};

export default Nav;
