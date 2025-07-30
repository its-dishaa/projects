import React, { useState, useCallback, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [darkmode,setDarkmode]=useState(false);

  const passwordRef=useRef(null);

  useEffect(()=>{
    if(darkmode){
      document.documentElement.classList.add('dark');
    } else{
      document.documentElement.classList.remove('dark');
    }
  },[darkmode]);

 

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
     <div className="app-container">
      <h1>Password Generator</h1>
      <button onClick={() => setDarkmode(!darkmode)}>
        Switch to {darkmode ? 'Light' : 'Dark'} Mode
      </button>
    </div>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
           <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-white">
            Length: {length}
            <input
              type="range"
              min="5"
              max="10"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full"
            />
          </label>

          <label className="text-white">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            /> Include Numbers
          </label>

          <label className="text-white">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            /> Include Special Characters
          </label>

          <button
            onClick={passwordGenerator}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-700"
          >
            Regenerate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
