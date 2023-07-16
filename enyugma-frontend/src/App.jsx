
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
}

export default App
