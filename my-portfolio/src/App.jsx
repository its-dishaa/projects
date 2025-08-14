import { useState } from 'react'
import './App.css' 
// import Navbar from './Components/Navbar'
// import Background from './Components/Background'

function App() {
  return (
    <>
      <Navbar />
      <main className="relative pt-16 bg-blue-900 min-h-screen text-white">
        <Background />
        <h1 className="text-4xl font-bold">🚀 Tailwind is working!</h1>
      </main>
    </>
  )
}

export default App;

