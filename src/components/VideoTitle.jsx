import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolutebg-gradient-to-r from-black bg-gradient-to-l">
      <h1 className="font-bold text-2xl p-4 ">{title}</h1>
      <p className="max-w-md p-4 ">{overview}</p>
      <div className="flex  items-center space-x-3.5  p-4">
        <button className="px-6 py-2 bg-blue-500 rounded hover:bg-blue-300 transition ">
          {" "}
          ▶️ Play
        </button>
        <button className="px-6 py-2 bg-blue-500 rounded hover:bg-blue-300 transition ">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
