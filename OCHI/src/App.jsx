import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="bg-dark  min-vh-100 w-100">
      <Navbar />
      <LandingPage/>
    </div>
  );
}

export default App;
