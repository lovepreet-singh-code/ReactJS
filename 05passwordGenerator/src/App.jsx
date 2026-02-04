/* eslint-disable react-hooks/set-state-in-effect */

import { useState, useCallback, useEffect, useRef } from "react";

function App() {

  // Password settings states
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  // Generated password state
  const [password, setPassword] = useState("");

  // Input reference for copy feature
  const passwordRef = useRef(null);

  // Password Generator Function
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    // Loop to generate password
    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Copy password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // Auto-generate password when options change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">

      <h1 className="text-white text-center my-3">
        Password Generator
      </h1>

      {/* Password Output + Copy Button */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          readOnly
          ref={passwordRef}
          className="outline-none w-full py-1 px-3"
        />

        <button
          onClick={copyPasswordToClipboard}
          className="bg-blue-700 text-white px-3"
        >
          Copy
        </button>
      </div>

      {/* Controls */}
      <div className="flex text-sm gap-x-2">

        {/* Length Slider */}
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <label>Length: {length}</label>

        {/* Numbers Option */}
        <input
          type="checkbox"
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <label>Numbers</label>

        {/* Characters Option */}
        <input
          type="checkbox"
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        <label>Characters</label>
      </div>
    </div>
  );
}

export default App;
