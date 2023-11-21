import { Routes, Route } from "react-router-dom";

import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Navbar from './Layout/Navbar';
import Footer from "./Layout/Footer";

function App() {

  return (
    <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
    </main>
  )
}

export default App
