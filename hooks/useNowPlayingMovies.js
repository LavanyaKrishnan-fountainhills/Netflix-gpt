import { addNowPlayingMovies } from "../src/utils/movieSlice";
import { useDispatch } from "react-redux";
import { OPTIONS } from "../src/utils/constants";
import { useEffect } from "react";


 const useNowPlayingMovies = () => {
    const dispatch  = useDispatch();

  const DetailsOfTheMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=c61cb128b0a5c51a88722dc92e16e2e2&language=en-US&page=1",
      OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    DetailsOfTheMovies();
  }, []);
};


export default useNowPlayingMovies;