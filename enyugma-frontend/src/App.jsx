import "./App.scss";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./Pages/Home/index.jsx";
import GlowBall from "./Components/cursor/index.jsx";
import Navbar from "./Components/Navbar/index.jsx";
import Footer from "./Components/Footer/index.jsx";
import Preloader from "./Components/Preloader/Preloader";
import Spin from "./Components/Spin/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="App">
          <GlowBall />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<h1>About</h1>} />
            <Route path="/contact" element={<h1>Contact</h1>} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
