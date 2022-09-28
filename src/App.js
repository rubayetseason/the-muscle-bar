import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  },[]);
  return (
    <div className="App">
<Navbar></Navbar>
<Body></Body>
    </div>
  );
}

export default App;
