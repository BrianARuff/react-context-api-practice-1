import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);

  let [name, setName] = useState("");
  let [price, setPrice] = useState("");

  const handleSetName = e => {
    setName(e.target.value);
  };
  const handleSetPrice = e => {
    setPrice(e.target.value);
  };

  const addMovie = () => {
    const newMovie = { name, price, id: Math.random() * 1000 * Date.now() };
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <div>
        <label>Movie Name</label><br/>
        <input
          style={{ border: "1px solid black", margin: "20px 0", height: "30px", width: "100%" }}
          name="name"
          onChange={handleSetName}
          type="text"
        />
      </div>
      <div>
        <label>Price</label> <br/>
        <input style={{ border: "1px solid black", margin: "20px 0", height: "30px", width: "100%" }} name="price" onChange={handleSetPrice} type="text" />
      </div>
      <button style={{border: "1px solid red", background: "red", color: "black", fontWeight: "bold", width: "100%", height: "30px", borderRadius: "4px"}} onClick={addMovie}>Add Movie</button>
    </div>
  );
};

export default AddMovie;
