import React from "react";
import Header from "../components/Header";
import HeroAbout from "../sections/Sections-AboutUs/HeroAbout";
import MisionVision from "../sections/Sections-AboutUs/MisionVision";
import ValuesSection from "../sections/Sections-AboutUs/ValuesSection";
import NumbersSection from "../sections/Sections-AboutUs/ImpactSection";
import OurTeamSection from "../sections/Sections-AboutUs/OurTeamSection";
import CTA from "../sections/CTA/CTA";

const AboutUs = () => {
  return (
    <div>
      <main className="flex-grow bg-white min-h-screen">
        <MisionVision />
        <ValuesSection />
        <CTA />
      </main>
    </div>
  );
};

export default AboutUs;
