import React from "react";

const Movie = props => {
  return (
    <div>
      <h4 style={{ fontWeight: "bolder" }}>{props.name}</h4>
      <p style={{ fontWeight: "lighter" }}>{props.price}</p>
    </div>
  );
};

export default Movie;
