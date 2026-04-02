import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CDSCO from './pages/Services/CDSCO';
import USFDA from './pages/Services/USFDA';
import EUMDR from './pages/Services/EUMDR';
import CoreDoc from './pages/Services/CoreDoc';
import { BlogList, BlogPost } from './pages/Blogs';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-[#2c8498] selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/cdsco" element={<CDSCO />} />
            <Route path="/services/usfda" element={<USFDA />} />
            <Route path="/services/eu-mdr" element={<EUMDR />} />
            <Route path="/services/core-doc" element={<CoreDoc />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}
