import React, { useState, useEffect, useRef } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [message, setMessage] = useState("");

  const passwordRef = useRef(null);

  const handleCopyPassword = () => {
    if (password) {
      passwordRef.current.select();
      navigator.clipboard.writeText(password);
      setMessage("Password Copied!");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleGeneratePassword = () => {
    let GeneratePassword = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (includeNumbers) {
      str += "0123456789";
    }
    if (includeSymbols) {
      str += "!@#$%^&*()_+";
    }

    for (let i = 0; i < length; i++) {
      GeneratePassword += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(GeneratePassword);
    setMessage("");
  };

  useEffect(() => {
    handleGeneratePassword();
  }, [length, includeNumbers, includeSymbols]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 p-8">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-8 text-black border-8 border-black p-4 rounded-lg shadow-brutal bg-gradient-to-r from-yellow-400 to-pink-400">
        Password Generator
      </h1>

      {/* Input Box for Password */}
      <div className="flex items-center mb-6 w-full max-w-lg">
        <input
          type="text"
          value={password}
          ref={passwordRef}
          placeholder="Generated password here..."
          className="w-full px-4 py-3 bg-white border-4 border-black rounded-lg text-black font-bold shadow-brutal"
          readOnly
        />
        <button
          onClick={handleCopyPassword}
          className="ml-4 bg-blue-500 text-white px-6 py-3 rounded-lg border-4 border-black font-bold shadow-brutal hover:bg-blue-600"
        >
          Copy
        </button>
      </div>

      {/* Success/Message */}
      {message && (
        <p className="mb-6 text-2xl font-bold text-black border-4 border-black px-4 py-2 bg-green-300 rounded-lg shadow-brutal">
          {message}
        </p>
      )}

      {/* Options */}
      <div className="w-full max-w-lg bg-pink-200 p-6 border-8 border-black rounded-lg shadow-brutal">
        {/* Range Slider */}
        <div className="mb-8">
          <label className="block text-2xl font-bold mb-4 text-black">
            Password Length
          </label>
          <div className="flex items-center">
            <input
              type="range"
              min="6"
              max="32"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full bg-yellow-300 border-4 border-black rounded-lg shadow-brutal"
            />
            <span className="ml-4 text-2xl font-bold text-black border-4 border-black px-4 py-2 bg-white rounded-lg shadow-brutal">
              {length}
            </span>
          </div>
        </div>

        {/* Checkboxes */}
        <div className="space-y-6 mb-8">
          <div>
            <label className="flex items-center text-xl font-bold text-black">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="mr-4 bg-white border-4 border-black shadow-brutal"
              />
              Include Numbers
            </label>
          </div>
          <div>
            <label className="flex items-center text-xl font-bold text-black">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="mr-4 bg-white border-4 border-black shadow-brutal"
              />
              Include Symbols
            </label>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGeneratePassword}
          className="w-full bg-green-500 text-black py-4 border-4 border-black rounded-lg font-bold shadow-brutal hover:bg-green-600"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
