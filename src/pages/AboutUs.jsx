import React from 'react';
import Header from '../components/Header';
import HeroAbout from '../sections/Sections-AboutUs/HeroAbout';
import MisionVision from '../sections/Sections-AboutUs/MisionVision';
import Who from '../sections/Sections-AboutUs/Who';
import ValuesSection from '../sections/Sections-AboutUs/ValuesSection';

const AboutUs = () => {
    return (
        <div>
            <Header />
            <main className="flex-grow bg-white min-h-screen">
                <HeroAbout />
                <MisionVision />
                <Who />
                <ValuesSection /> 

            </main>
        </div>
    );
};

export default AboutUs;