import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Innovation from './pages/Innovation';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

// Auto-scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative w-full min-h-screen bg-navy text-text-light font-sans selection:bg-electric selection:text-white overflow-x-hidden flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
