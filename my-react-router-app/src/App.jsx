import React from 'react';
import Navbar from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="page-content">
        <h1>Welcome</h1>
        <p>This is the main content of the page.</p>
        <Outlet/>
      </main>
      <About/>
      <Footer />
    </div>
  );
}

export default App;
