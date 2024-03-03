import React from "react";
import "./Section.css";

const MovieCard = ({ item }) => {
  const { cover, name, time, id } = item;

  return (
    <div className="movie-card" key={id}>
      <div className="img" style={{ margin: "10px" }}>
        <img src={cover} alt={name} />
      </div>
    </div>
  );
};

export default MovieCard;
