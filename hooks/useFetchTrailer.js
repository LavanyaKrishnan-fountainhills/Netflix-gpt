import { useDispatch } from "react-redux";
import { addTrailerOfTheMovie } from "../src/utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const fetchMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?api_key=c61cb128b0a5c51a88722dc92e16e2e2&language=en-US"
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    //   console.log(filterData);

    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerOfTheMovie(trailer));
  };

  useEffect(() => {
    fetchMovieTrailer();
  }, []);
};

export default useMovieTrailer;
