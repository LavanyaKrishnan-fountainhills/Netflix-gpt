import React from "react";
import Header from "./Header";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  return (
    <div className="min-h-screen  bg-black text-white">
      <nav className="flex justify-between items-center py-4">
        <Header />
        <div className="w-10 h-10 flex items-center justify-center bg-amber-800 text-white font-bold rounded-full">
          L
        </div>
        <button className="px-6 py-2 bg-blue-900" onClick={handleSignOut}>
          Sign out
        </button>
      </nav>
    </div>
  );
};

export default Browse;
