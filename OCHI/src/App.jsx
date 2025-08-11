import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';

function App() {
  return (
    <div className="bg-dark  min-vh-100 w-100">
      <Navbar />
      <LandingPage/>
      <Marquee/>
      <About/>
    </div>
  );
}

export default App;
