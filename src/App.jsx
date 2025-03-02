import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Hero from './sections/Hero/Hero.jsx';
import Footer from './components/Footer.jsx';
import AboutUs from './pages/AboutUs';
import Testimonials from './sections/Testimonials/Testimonials.jsx';

function App() {
  return (
    <Router>
      <div className="w-full overflow-x-hidden relative">
        
      <Header />
        <main className="w-full pt-24 sm:pt-28">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Testimonials />
              </>
            } />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;