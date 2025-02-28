import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Hero from './sections/Hero/Hero.jsx';
import Footer from './components/Footer.jsx';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
