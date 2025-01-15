import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("bg-red-600"); // Default background color

  return (
    <div className={`min-h-screen flex justify-center items-center ${color}`}>
      {/* Outer Container */}
      <div className="grid grid-cols-3 gap-4 p-8 bg-black border-8 border-black rounded-lg shadow-brutal">
        {/* Boxes */}
        <div
          onClick={() => setColor("bg-red-500")}
          className="bg-red-500 p-8 border-4 border-black rounded-md shadow-lg relative cursor-pointer"
        >
          {/* Inner Box */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-black w-8 h-8 rounded-full"></div>
        </div>
        <div
          onClick={() => setColor("bg-green-500")}
          className="bg-green-500 p-8 border-4 border-black rounded-md shadow-lg relative cursor-pointer"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-black w-8 h-8 rounded-full"></div>
        </div>
        <div
          onClick={() => setColor("bg-blue-500")}
          className="bg-blue-500 p-8 border-4 border-black rounded-md shadow-lg relative cursor-pointer"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-black w-8 h-8 rounded-full"></div>
        </div>
        <div
          onClick={() => setColor("bg-yellow-500")}
          className="bg-yellow-500 p-8 border-4 border-black rounded-md shadow-lg relative cursor-pointer"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-black w-8 h-8 rounded-full"></div>
        </div>
        <div
          onClick={() => setColor("bg-purple-500")}
          className="bg-purple-500 p-8 border-4 border-black rounded-md shadow-lg relative cursor-pointer"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-black w-8 h-8 rounded-full"></div>
        </div>
        <div
          onClick={() => setColor("bg-pink-500")}
          className="bg-pink-500 p-8 border-4 border-black rounded-md shadow-lg relative cursor-pointer"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-black w-8 h-8 rounded-full"></div>
        </div>
        <div
          onClick={() => setColor("bg-orange-500")}
          className="bg-orange-500 p-8 border-4 border-black rounded-md shadow-lg relative cursor-pointer"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-black w-8 h-8 rounded-full"></div>
        </div>
        <div
          onClick={() => setColor("bg-teal-500")}
          className="bg-teal-500 p-8 border-4 border-black rounded-md shadow-lg relative cursor-pointer"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-black w-8 h-8 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
