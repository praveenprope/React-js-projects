import { useState, useEffect } from "react";

const Password = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const passwordHandler = () => {
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "123456789";
    const symbolsValue = "!@#$%^&*()_+[]{}|;:',.<>?/`~";
    let randomPassword = '';
    let characterPool = alphabets;

    if (includeNumbers) characterPool += numbers;
    if (symbols) characterPool += symbolsValue;

    for (let i = 1; i <= passwordLength; i++) {
      randomPassword += characterPool[Math.floor(Math.random() * characterPool.length)];
    }
    setPassword(randomPassword);
  };

  useEffect(() => {
    passwordHandler();
  }, [passwordLength, includeNumbers, symbols]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-yellow-300 via-red-300 to-purple-400 p-6 font-retro text-center text-black">
      <h1 className="text-4xl font-bold tracking-wide text-purple-800 drop-shadow-lg mb-4 flex items-center">
        🔑 Retro Password Generator
      </h1>
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg space-y-6 border-4 border-purple-800">
        <div className="flex flex-col items-center space-y-2">
          <input
            type="text"
            id="password"
            className="p-3 border-2 border-purple-500 rounded-md w-full text-center font-mono text-lg bg-purple-100"
            readOnly
            value={password}
          />
          <button
            className="px-6 py-2 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-600 flex items-center space-x-2"
            onClick={() => {
              navigator.clipboard.writeText(password);
              alert("🔗 Password copied to clipboard!");
            }}
          >
            <span>Copy</span> ✂️
          </button>
        </div>

        <div className="flex flex-col items-center">
          <label htmlFor="range" className="text-lg font-semibold text-purple-800">
            Password Length: <span className="font-bold text-purple-600">{passwordLength}</span> 🧮
          </label>
          <input
            type="range"
            id="range"
            min="8"
            max="100"
            value={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>

        <div className="flex justify-center space-x-8 items-center">
          <label className="flex items-center space-x-2 text-purple-800">
            <input
              type="checkbox"
              id="includeNumbers"
              className="accent-purple-500 h-5 w-5"
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            <span className="text-lg font-semibold">Include Numbers 1️⃣</span>
          </label>
          <label className="flex items-center space-x-2 text-purple-800">
            <input
              type="checkbox"
              id="includeSymbols"
              className="accent-purple-500 h-5 w-5"
              onChange={(e) => setSymbols(e.target.checked)}
            />
            <span className="text-lg font-semibold">Include Symbols 💡</span>
          </label>
        </div>
      </div>

      <footer className="mt-12 text-purple-900 text-sm italic">
             </footer>
    </div>
  );
};

export default Password;
