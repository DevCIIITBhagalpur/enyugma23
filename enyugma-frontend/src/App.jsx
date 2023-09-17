import "./App.scss";
import { Routes, Route } from "react-router-dom";
import  { useEffect, useState } from "react";
import Home from "./Pages/Home/index.jsx";
import TechnicalEvent from "./Pages/TechnicalEvent";
import GlowBall from "./Components/cursor/index.jsx";
import Footer from "./Components/Footer/index.jsx";
import Preloader from "./Components/Preloader/Preloader";
import Spin from "./Components/Spin/Preloader";
import CulturalEvent from "./Pages/CulturalEvent/index.jsx";
import GalleryPage from "./Pages/Gallery/index.jsx";
import Events from "./Pages/Events/index.jsx";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {isLoading && (
                <div className="preloader">
                    <Preloader />
                </div>
            )}
            <div
                className="App"
                style={{
                    opacity: isLoading ? 0 : 1,
                }}
            >
                <GlowBall />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="events">
                        <Route index element={<Events />} />
                        <Route path="technical" element={<TechnicalEvent />} />
                        <Route path="cultural" element={<CulturalEvent />} />
                    </Route>
                    <Route path="contact" element={<h1>Contact</h1>} />
                    <Route path="gallery" element={<GalleryPage />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;
