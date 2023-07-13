
import './App.scss'
import { Routes, Route } from 'react-router-dom'
// import Home from './Pages/Home/index.jsx';
import Navbar from './Components/Navbar/Navbar'
function App() {
    return (
        <div className="App">
            <Routes>
            <Route path="/" element={
                    <Navbar/>
                } />

                {/* <Route path="/" element={
                  <Home />
                } /> */}
                {/* <Route path="/events" element={<h1>About</h1>} /> */}
                {/* <Route path="/" element={<h1>Contact</h1>} /> */}
            </Routes>
        </div>
    )
}

export default App
