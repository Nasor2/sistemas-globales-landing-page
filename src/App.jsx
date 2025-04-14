import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
    <HelmetProvider>
      <Router>
        <div className="w-full relative">
          <Helmet>
            {/* SEO General para toda la aplicación */}
            <title>Publicidad Exterior y Outdoor | Sistemas Globales</title>
            <meta 
              name="description" 
              content="Soluciones profesionales de publicidad exterior: vallas, pantallas LED y más. Maximiza la visibilidad de tu marca con Sistemas Globales."
            />
            
            {/* JSON-LD para información estructurada */}
            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  "name": "Sistemas Globales",
                  "description": "Servicios profesionales de publicidad exterior y outdoor.",
                  "image": "https://tusistemasglobales.com/logo.png",
                  "url": "https://tusistemasglobales.com",
                  "telephone": "+123456789",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Tu Dirección",
                    "addressLocality": "Tu Ciudad",
                    "postalCode": "12345",
                    "addressCountry": "País"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "40.7128",
                    "longitude": "-74.0060"
                  },
                  "sameAs": [
                    "https://www.facebook.com/sistemasglobales",
                    "https://www.instagram.com/sistemasglobales"
                  ]
                }
              `}
            </script>
          </Helmet>
        
          <Header />
          <main className="w-full pt-24 sm:pt-28">
            <Routes>
              <Route path="/" element={
                <>
                  {/* Home Page SEO específico */}
                  <Helmet>
                    <title>Publicidad Exterior Premium | Vallas y Pantallas | Sistemas Globales</title>
                    <meta 
                      name="description" 
                      content="Expertos en soluciones de publicidad outdoor. Vallas, pantallas LED y soluciones publicitarias para exteriores con los mejores precios del mercado." 
                    />
                    <link rel="canonical" href="https://tusistemasglobales.com/" />
                  </Helmet>
                  <Hero />
                  <LocationsSection />
                  <PricingContact />
                  <Contact />
                  <CTA />
                </>
              } />
              <Route path="/about" element={
                <>
                  {/* About Page SEO específico */}
                  <Helmet>
                    <title>Sobre Nosotros | Líderes en Publicidad Exterior | Sistemas Globales</title>
                    <meta 
                      name="description" 
                      content="Conoce al equipo detrás de las mejores soluciones de publicidad exterior del mercado. Experiencia, innovación y resultados." 
                    />
                    <link rel="canonical" href="https://tusistemasglobales.com/about" />
                  </Helmet>
                  <AboutUs />
                </>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;