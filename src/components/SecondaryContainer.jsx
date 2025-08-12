import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies || []);
  // console.log("let one",movies);
  
  if (movies.length === 0) return null;
  
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Trending"} movies={movies} />
      <MovieList title={"Upcoming"} movies={movies}/>
      <MovieList title={"Horror"} movies={movies} />
      <MovieList title={"Thirller"} movies={movies} />
    </div>
  );
};

export default SecondaryContainer;
