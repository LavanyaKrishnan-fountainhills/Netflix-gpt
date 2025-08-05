import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { BACKROUND_IMG } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    const message = checkValidData(email.current.value, password.current.value);
    setError(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  };

  return (
    <div className="relative h-screen w-full bg-black ">
      <img
        className="hidden sm:block h-full w-full object-cover"
        src= {BACKROUND_IMG}
        alt="Netflix background"
      />

      <div className="absolute inset-0 p-4 backdrop-brightness-50 ">
        <Header />
        <div className="flex justify-center items-center h-full ">
          <form className="bg-black opacity-90 text-white p-4 md:p-10 sm:p-8 rounded-lg w-full max-w-md  ">
            <h1 className="text-3xl font-bold mb-10">
              {" "}
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Email or Mobile number"
                className="w-full p-4 bg-transparent border border-gray-700 placeholder:text-white rounded outline-none text-white"
                ref={email}
              />
            </div>

            {!isSignIn && (
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-4 bg-transparent border border-gray-700 rounded outline-none text-white placeholder:text-white"
                />
              </div>
            )}

            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 bg-transparent border border-gray-700 rounded outline-none text-white placeholder:text-white"
                ref={password}
              />
            </div>
            <p className="text-red-500 text-center font-semibold capitalize mb-4">
              {error}
            </p>

            <div className="mb-4">
              <button
                className="w-full bg-red-600 hover:bg-red-700 p-3 rounded font-semibold"
                onClick={handleButtonClick}
              >
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </div>

            <p className="text-center mb-2">OR</p>

            <div className="mb-4">
              <button className="w-full border border-gray-400 text-white p-3 rounded">
                Use sign-in code
              </button>
            </div>

            <p className="text-left lg:text-center text-sm mb-4 cursor-pointer hover:underline">
              Forgot Password?
            </p>

            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Remember me</span>
            </div>

            <p className="text-sm mb-2 pointer" onClick={toggleSignInForm}>
              {" "}
              <span className="text-white hover:underline cursor-pointer">
                {" "}
                {isSignIn
                  ? "New to Netflix? Sign up now"
                  : "Already user Sign in now!"}
              </span>
            </p>

            <p className="text-xs text-gray-400">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <span className="text-blue-500 hover:underline cursor-pointer ">
                Learn more.
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
