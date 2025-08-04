import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="relative h-screen w-screen ">
      <img
        className="h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
        alt="Netflix background"
      />

      <div className="absolute inset-0 m-2">
        <Header /> 
        <div className="flex justify-center items-center h-full ">
          <form className="bg-black opacity-90 text-white p-5 rounded-lg w-full max-w-md mt-14 ">
            <h1 className="text-3xl font-bold mb-6">
              {" "}
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Email or Mobile number"
                className="w-full p-3 bg-gray-700 rounded outline-none"
              />
            </div>

            {!isSignIn && (
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 bg-gray-700 rounded outline-none"
                />
              </div>
            )}

            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 bg-gray-700 rounded outline-none"
              />
            </div>

            <div className="mb-4">
              <button className="w-full bg-red-600 hover:bg-red-700 p-3 rounded font-semibold">
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </div>

            <p className="text-center mb-2">OR</p>

            <div className="mb-4">
              <button className="w-full border border-gray-400 text-white p-3 rounded">
                Use sign-in code
              </button>
            </div>

            <p className="text-left text-sm mb-4 cursor-pointer hover:underline">
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
              <span className="text-blue-500 hover:underline cursor-pointer">
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
