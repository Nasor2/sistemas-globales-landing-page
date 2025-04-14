// src/pages/Home.jsx

import Hero from "../sections/Hero/Hero.jsx";
import LocationsSection from "../sections/Location/LocationSection.jsx";
import PricingContact from "../sections/Pricing/PricingContact.jsx";
import CTA from "../sections/CTA/CTA.jsx";
import Contact from "../sections/Contact/Contact.jsx";

export const metadata = {
  title: "Publicidad Exterior Premium | Vallas y Pantallas | Sistemas Globales",
  description:
    "Expertos en soluciones de publicidad outdoor. Vallas, pantallas LED y soluciones publicitarias para exteriores con los mejores precios del mercado.",
  alternates: {
    canonical: "https://sistemasglobales.vercel.app/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <LocationsSection />
      <PricingContact />
      <Contact />
      <CTA />
    </>
  );
}
