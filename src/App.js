import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// NOTICE THE DOT (.) AT THE START OF THESE PATHS
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import Contact from './pages/Contact';
// Import Admin at the top
import Admin from './pages/Admin';

// Add route inside <Routes>


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;