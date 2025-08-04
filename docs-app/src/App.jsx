import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './components/background';
import Foreground from './components/Foreground';
import { GoDownload } from "react-icons/go";
import { GoX } from "react-icons/go";



function App() {
  const handleClick=()=>{
  alert("Docs is saved");
  }
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 text-primary ">DOCS</h1>
      <button className="btn btn-success mt-3" onClick={handleClick}>SAVE</button>
    <Background/>
      <Foreground/>
      <GoDownload />
    </div>
  );
}

export default App;
