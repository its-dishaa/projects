import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Background from './Components/Background'
import HeroText from './Components/HeroText'
import About from './Components/About';
import Projects from "./Components/Projects";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Background/>
    <HeroText/>
    <About/>
    <Projects/>
    
  
    </>
  )
}

export default App
