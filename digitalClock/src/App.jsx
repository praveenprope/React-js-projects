import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-900 to-black text-white">
      <div className="bg-black bg-opacity-50 backdrop-blur-lg p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-5xl font-bold tracking-wider">Digital Clock</h1>
        <h2 className="text-7xl font-mono mt-5">{time}</h2>
        <h2 className="text-xl mt-2 opacity-80">{date}</h2>
      </div>
    </div>
  );
}

export default App;
