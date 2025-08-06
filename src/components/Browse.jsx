import React, { useEffect } from "react";
import Header from "./Header";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";

import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const dispatch = useDispatch();

  useNowPlayingMovies();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex justify-evenly items-center px-6 py-4 bg-zinc-900">
        <div className="flex items-center">
          <Header />
        </div>

        <div className="flex items-center space-x-6">
          <div className="w-10 h-10 flex items-center justify-center bg-amber-800 text-white font-bold rounded-full">
            L
          </div>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-blue-800 rounded hover:bg-blue-700 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </nav>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
