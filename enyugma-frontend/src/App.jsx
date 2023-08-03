
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index.jsx";
import GlowBall from "./Components/cursor/index.jsx";
import Navbar from "./Components/Navbar/index.jsx";
import Footer from "./Components/Footer/index.jsx";

function App() {

  return (
    <div className="App">
      <GlowBall />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
