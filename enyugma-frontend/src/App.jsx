import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
// import Home from "./Pages/Home/index.jsx";
// import TechnicalEvent from "./Pages/TechnicalEvent";
import GlowBall from "./Components/cursor/index.jsx";
import Footer from "./Components/Footer/index.jsx";
import Preloader from "./Components/Preloader/Preloader";
// import Spin from "./Components/Spin/Preloader";
// import CulturalEvent from "./Pages/CulturalEvent/index.jsx";
// import GalleryPage from "./Pages/Gallery/index.jsx";
// import Events from "./Pages/Events/index.jsx";
// import EventDetail from "./Pages/EventDetail/index.jsx";
// import SponsorCard from "./Components/SponsorCard/index.jsx";
// import Sponsors from "./Pages/Sponsors/index.jsx";
// import WorkshopEvent from "./Pages/WorkshopEvent/index.jsx";
// import Register from "./Pages/Register/index.jsx";
// lazy loading
const Home = lazy(() => import("./Pages/Home/index.jsx"));
const TechnicalEvent = lazy(() => import("./Pages/TechnicalEvent"));

const CulturalEvent = lazy(() => import("./Pages/CulturalEvent/index.jsx"));
const GalleryPage = lazy(() => import("./Pages/Gallery/index.jsx"));
const Events = lazy(() => import("./Pages/Events/index.jsx"));
const EventDetail = lazy(() => import("./Pages/EventDetail/index.jsx"));
const Sponsors = lazy(() => import("./Pages/Sponsors/index.jsx"));
const WorkshopEvent = lazy(() => import("./Pages/WorkshopEvent/index.jsx"));
const Register = lazy(() => import("./Pages/Register/index.jsx"));

function App() {
    // const [isLoading, setIsLoading] = useState(true);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 2000);
    // }, []);

    return (
        <>
            <div className="App">
                <GlowBall />
                <Routes>
                    <Route
                        index
                        element={
                            <Suspense
                                fallback={
                                    <>
                                        <Preloader />
                                    </>
                                }
                            >
                                <Home />{" "}
                            </Suspense>
                        }
                    />
                    <Route path="events">
                        <Route
                            index
                            element={
                                <Suspense
                                    fallback={
                                        <>
                                            <Preloader />
                                        </>
                                    }
                                >
                                    <Events />{" "}
                                </Suspense>
                            }
                        />
                        <Route path="technical">
                            <Route
                                index
                                element={
                                    <Suspense
                                        fallback={
                                            <>
                                                <Preloader />
                                            </>
                                        }
                                    >
                                        <TechnicalEvent />{" "}
                                    </Suspense>
                                }
                            />
                            <Route
                                path=":id"
                                element={
                                    <Suspense
                                        fallback={
                                            <>
                                                <Preloader />
                                            </>
                                        }
                                    >
                                        <EventDetail />{" "}
                                    </Suspense>
                                }
                            />
                        </Route>
                        <Route path="cultural">
                            <Route
                                index
                                element={
                                    <Suspense
                                        fallback={
                                            <>
                                                <Preloader />
                                            </>
                                        }
                                    >
                                        <CulturalEvent />{" "}
                                    </Suspense>
                                }
                            />
                            <Route
                                path=":id"
                                element={
                                    <Suspense
                                        fallback={
                                            <>
                                                <Preloader />
                                            </>
                                        }
                                    >
                                        <EventDetail />{" "}
                                    </Suspense>
                                }
                            />
                        </Route>
                        <Route path="workshop">
                            <Route
                                index
                                element={
                                    <Suspense
                                        fallback={
                                            <>
                                                <Preloader />
                                            </>
                                        }
                                    >
                                        <WorkshopEvent />{" "}
                                    </Suspense>
                                }
                            />
                            <Route
                                path=":id"
                                element={
                                    <Suspense
                                        fallback={
                                            <>
                                                <Preloader />
                                            </>
                                        }
                                    >
                                        <EventDetail />{" "}
                                    </Suspense>
                                }
                            />
                        </Route>
                    </Route>
                    <Route path="contact" element={<h1>Contact</h1>} />

                    <Route
                        path="gallery"
                        element={
                            <Suspense fallback={<Preloader />}>
                                <GalleryPage />{" "}
                            </Suspense>
                        }
                    />
                    <Route
                        path="sponsors"
                        element={
                            <Suspense fallback={<Preloader />}>
                                <Sponsors />{" "}
                            </Suspense>
                        }
                    />
                    <Route
                        path="register"
                        element={
                            <Suspense fallback={<Preloader />}>
                                <Register />{" "}
                            </Suspense>
                        }
                    />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;
