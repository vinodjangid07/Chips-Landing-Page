import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import About from './Routes/About';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop'; 


function App() {
  
  return (
    <>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/Chips-Landing-Page" element={<Home />} />
            <Route path="/Chips-Landing-Page/About" element={<About />} />
          </Routes>
          <Footer />
        </Router>
     
    </>
  );
}

export default App;