import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import showcaseImage from '../assets/images/showcase-1.png';

const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-white pt-24">
                <div className="w-screen h-[600px] relative">
                    <div className="w-full h-full left-0 top-0 absolute">
                        <div className="w-full h-full left-0 top-0 absolute">
                            <div className="w-full h-4/12 left-0 top-0 absolute bg-black" />
                            <img
                                className="w-full h-full left-0 top-0 absolute opacity-90 object-cover"
                                src={showcaseImage}
                                alt="Publicidad"
                            />
                        </div>
                        <div className="w-full h-full left-0 top-0 absolute opacity-90 bg-gradient-to-t from-[#1e3a5f] to-[#5271a1]" />
                    </div>

                    <div data-svg-wrapper className="absolute bottom-0 left-0 w-full">
                        <svg width="100%" height="100%" viewBox="0 0 1450 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 53.6386L0 110L1450 110V9.30096C1413.15 19.3208 1327.54 42.5166 1279.86 55.1416C1220.25 70.9228 1145.48 79.9406 1034.94 91.2129C924.402 102.485 734.753 53.6386 722.833 51.3841C710.912 49.1297 610.127 13.0584 417.227 4.79205C262.907 -1.82102 74.7758 34.601 0 53.6386Z" fill="white" />
                            <path opacity="0.6" d="M0 50.3997L0 94L1450 94V16.1007C1413.15 23.8519 1327.54 41.7959 1279.86 51.5623C1220.25 63.7704 1145.48 70.7465 1034.94 79.4666C924.402 88.1866 734.753 50.3997 722.833 48.6557C710.912 46.9116 610.127 19.0074 417.227 12.6127C262.907 7.49695 74.7758 35.6724 0 50.3997Z" fill="white" />
                            <path opacity="0.15" d="M1450 38.3997V82L0.00012207 82V4.10075C36.8461 11.8519 122.459 29.7959 170.142 39.5623C229.746 51.7704 304.522 58.7465 415.06 67.4666C525.598 76.1866 715.247 38.3997 727.167 36.6557C739.088 34.9116 839.873 7.00744 1032.77 0.612724C1187.09 -4.50305 1375.22 23.6725 1450 38.3997Z" fill="white" />
                            <path opacity="0.2" d="M1450 61.3997V105L0 105V27.1007C36.8461 34.8519 122.459 52.7959 170.142 62.5623C229.746 74.7704 304.522 81.7465 415.06 90.4666C525.598 99.1866 715.247 61.3997 727.167 59.6557C739.088 57.9116 839.873 30.0074 1032.77 23.6127C1187.09 18.4969 1375.22 46.6724 1450 61.3997Z" fill="white" />
                        </svg>
                    </div>
                </div>

                <div className="absolute w-[967px] left-1/2 transform -translate-x-1/2" style={{ top: '197px' }}>
                    <h1 className="text-center text-5xl font-bold" style={{ width: '967px', height: '140px' }}>
                        <span className="text-white">Transformamos Espacios en </span>
                        <span className="text-red-600">Oportunidades</span>
                        <span className="text-white"> Publicitarias.</span>
                    </h1>
                    <p className="text-center text-sm w-[761px] mx-auto mt-1" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. id sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id congue sapien.
                    </p>
                    
                    {/* Código de redes sociales agregado aquí */}
                    <div className="w-[854.03px] h-[26.74px] text-center text-white text-base font-semibold font-['Open Sans'] mx-auto mt-20">Find us on</div>

                    <div className="mt-2 space-x-6 text-center text-white">
                        <FaFacebook className="inline-block text-2xl cursor-pointer" />
                        <FaInstagram className="inline-block text-2xl cursor-pointer" />
                        <FaTwitter className="inline-block text-2xl cursor-pointer" />
                        <FaLinkedin className="inline-block text-2xl cursor-pointer" />
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;