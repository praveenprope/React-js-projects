import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const inc = () => {
    setCounter(counter + 1);
  };

  const dic = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white flex flex-col justify-center items-center w-full h-screen space-y-8">
        <h1 className="text-6xl font-bold drop-shadow-md">{counter}</h1>
        <div className="flex space-x-4">
          <button
            onClick={inc}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-110"
          >
            Increment
          </button>
          <button
            onClick={dic}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-110"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
