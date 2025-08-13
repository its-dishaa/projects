import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Background from './Components/Background'
function App() {
 

  return (
    <>
     <Navbar />
     <Background/>
      <main className="pt-16 bg-gray-900 min-h-screen text-white">
        <h1 className="p-4">Hello World</h1>
      </main>
    </>
  )
}

export default App
