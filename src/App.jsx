import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Hero from './sections/Hero/Hero.jsx';
import Footer from './components/Footer.jsx';
import AboutUs from './pages/AboutUs';
import Testimonials from './sections/Testimonials/Testimonials.jsx';
import Features from './sections/Features/Features.jsx';
import PricingContact from './sections/Pricing/PricingContact.jsx';
import CTA from './sections/CTA/CTA.jsx';
import FAQ from './sections/FAQs/FAQ.jsx';
import Contact from './sections/Contact/Contact.jsx';
import ContactUs from './pages/ContactUs.jsx';
import CompanyLogos from './sections/Testimonials/CompanyLogos.jsx';
import LocationsSection from './sections/Location/LocationSection.jsx';

function App() {
  return (
    <Router>
      <div className="w-full relative">        
      <Header />
        <main className="w-full pt-24 sm:pt-28">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <LocationsSection />
                <PricingContact />
                <Contact />
                <CTA />
              </>
            } />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;