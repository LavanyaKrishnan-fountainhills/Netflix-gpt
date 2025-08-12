import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: [],
    addTrailer: null,
  },
  reducers: {
    
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerOfTheMovie: (state, action) => {
      state.addTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerOfTheMovie } = movieSlice.actions;

export default movieSlice.reducer;
