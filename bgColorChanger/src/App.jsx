import { useState } from 'react';

function App() {
  const [color, setColor] = useState('black');
  const colors = ['red', 'blue', 'pink', 'white','black'];

  return (
    <div
      style={{ backgroundColor: color }}
      className="flex flex-col justify-center items-center w-full h-screen transition-all duration-500"
    >
      <h1 className="text-3xl font-bold text-white mb-6">
        Selected Color: <span className="capitalize">{color}</span>
      </h1>
      <div className="flex gap-4">
        {colors.map((value, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg font-semibold shadow-lg transition-transform duration-300 transform hover:scale-110`}
            style={{
              backgroundColor: value,
              color: value === 'white' ? 'black' : 'white',
            }}
            onClick={() => setColor(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
