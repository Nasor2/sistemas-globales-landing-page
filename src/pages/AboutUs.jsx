import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-white pt-24">
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-4xl font-bold text-center mb-8">Pages Sobre Nosotros</h1>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;