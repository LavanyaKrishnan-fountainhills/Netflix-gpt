import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("this is from moview", movies);
  return (
    <div className="p-6">
      <h1 className="font-bold mb-2 text-2xl">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
