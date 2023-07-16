<<<<<<< HEAD

import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/index.jsx';
import Footer from './Components/Footer/Footer';
function App() {
    return (
        <div className="App">
            <Footer/>
            <Routes>
                <Route path="/" element={
                  <Home />
                } />
                <Route path="/events" element={<h1>About</h1>} />
                <Route path="/" element={<h1>Contact</h1>} />
            </Routes>
            
        </div>
    )
=======
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index.jsx";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<h1>About</h1>} />
        <Route path="/" element={<h1>Contact</h1>} />
      </Routes>
    </div>
  );
>>>>>>> bed4e68c55a113522cfcb663a5f594510f4b7565
}

export default App;
