import React from 'react';
import Header from '../components/Header';
import HeroAbout from '../sections/Sections-AboutUs/HeroAbout';
import MisionVision from '../sections/Sections-AboutUs/MisionVision';
import Who from '../sections/Sections-AboutUs/Who';
import ValuesSection from '../sections/Sections-AboutUs/ValuesSection';
import NumbersSection from '../sections/Sections-AboutUs/ImpactSection';

const AboutUs = () => {
    return (
        <div>
            <Header />
            <main className="flex-grow bg-white min-h-screen">
                <HeroAbout />
                <MisionVision />
                <Who />
                <ValuesSection /> 
                <NumbersSection /> 

            </main>
        </div>
    );
};

export default AboutUs;