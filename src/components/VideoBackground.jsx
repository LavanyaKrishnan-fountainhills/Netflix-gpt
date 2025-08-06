import React from "react";
import {  useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useFetchTrailer";



const VideoBackground = ({ movieId }) => {

  useMovieTrailer(movieId)

  const trailerVideo = useSelector((store) => store.movie?.addTrailer);

  // console.log(trailerVideo);


  return (
    <div>
      <iframe
        // src={"https://www.youtube.com/embed/" + trailerMovie?.key }
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
