import React from 'react';
import Header from '../components/Header';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaRocket, FaEye } from 'react-icons/fa';
import showcaseImage from '../assets/images/showcase-1.png';
import { GiTargeting } from 'react-icons/gi';
import { Lightbulb, Sparkles, Globe } from "lucide-react";
import logo from '../assets/icons/logo.png';

const AboutUs = () => {
    return (
        <div>
            <Header />
            <main className="flex-grow bg-white min-h-screen">
                <div className="w-full relative">
                    <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] min-h-screen flex flex-col relative">
                        {/* Imagen de fondo y gradiente */}
                        <div className="w-full h-full absolute top-0 left-0">
                            <div className="w-full h-4/12 absolute top-0 left-0 bg-black" />
                            <img
                                className="w-full h-full object-cover opacity-90"
                                src={showcaseImage}
                                alt="Publicidad"
                            />
                            <div className="w-full h-full absolute top-0 left-0 opacity-90 bg-gradient-to-t from-azul-primario to-azul-primario-claro" />
                        </div>

                        {/* Contenido centrado */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                                <span className="text-blanco-arena">Transformamos Espacios en </span>
                                <span className="text-rojo-primario">Oportunidades</span>
                                <span className="text-blanco-arena"> Publicitarias.</span>
                            </h1>
                            <p className="text-sm md:text-base w-full md:w-4/5 lg:w-3/5 text-blanco-arena/85 mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. id sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id congue sapien.
                            </p>
                            <div className="mt-8 md:mt-12 text-blanco-arena text-base font-semibold">
                                Find us on
                            </div>
                            <div className="mt-4 space-x-4 md:space-x-6">
                                <FaFacebook className="inline-block text-xl md:text-2xl cursor-pointer text-blanco-arena" />
                                <FaInstagram className="inline-block text-xl md:text-2xl cursor-pointer text-blanco-arena" />
                                <FaTwitter className="inline-block text-xl md:text-2xl cursor-pointer text-blanco-arena" />
                                <FaLinkedin className="inline-block text-xl md:text-2xl cursor-pointer text-blanco-arena" />
                            </div>
                        </div>

                        {/* Ola inferior */}
                        <div data-svg-wrapper className="absolute bottom-0 left-0 w-full">
                            <svg width="100%" height="100%" viewBox="0 0 1440 110" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 53.6386L0 110L1450 110V9.30096C1413.15 19.3208 1327.54 42.5166 1279.86 55.1416C1220.25 70.9228 1145.48 79.9406 1034.94 91.2129C924.402 102.485 734.753 53.6386 722.833 51.3841C710.912 49.1297 610.127 13.0584 417.227 4.79205C262.907 -1.82102 74.7758 34.601 0 53.6386Z" fill="white" />
                                <path opacity="0.6" d="M0 50.3997L0 94L1450 94V16.1007C1413.15 23.8519 1327.54 41.7959 1279.86 51.5623C1220.25 63.7704 1145.48 70.7465 1034.94 79.4666C924.402 88.1866 734.753 50.3997 722.833 48.6557C710.912 46.9116 610.127 19.0074 417.227 12.6127C262.907 7.49695 74.7758 35.6724 0 50.3997Z" fill="white" />
                                <path opacity="0.15" d="M1450 38.3997V82L0.00012207 82V4.10075C36.8461 11.8519 122.459 29.7959 170.142 39.5623C229.746 51.7704 304.522 58.7465 415.06 67.4666C525.598 76.1866 715.247 38.3997 727.167 36.6557C739.088 34.9116 839.873 7.00744 1032.77 0.612724C1187.09 -4.50305 1375.22 23.6725 1450 38.3997Z" fill="white" />
                                <path opacity="0.2" d="M1450 61.3997V105L0 105V27.1007C36.8461 34.8519 122.459 52.7959 170.142 62.5623C229.746 74.7704 304.522 81.7465 415.06 90.4666C525.598 99.1866 715.247 61.3997 727.167 59.6557C739.088 57.9116 839.873 30.0074 1032.77 23.6127C1187.09 18.4969 1375.22 46.6724 1450 61.3997Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>

                <section className="w-full max-w-[1440px] mx-auto py-10 px-4 bg-white rounded-[5px] overflow-hidden">
                    {/* Título */}
                    <div className="relative flex flex-col items-center mb-16">
                        <div className="relative w-full max-w-[983px] flex flex-col items-center">
                            <div className="relative w-full bg-rojo-primario rounded-[100px] py-4 md:py-6 px-4 md:px-8 flex items-center justify-center">

                                {/* ----------------- Elementos decorativos ----------------*/}
                                {/* Elementos superiores */}
                                <div className="absolute top-0 right-15 w-3 md:w-5 h-3 md:h-5 bg-white"></div>
                                <div className="absolute -top-3 md:-top-5 right-15 w-3 md:w-5 h-3 md:h-5 bg-rojo-primario"></div>
                                <div className="absolute -top-6 md:-top-10 right-10 w-3 md:w-5 h-3 md:h-5 bg-[#1e3a5f]"></div>

                                {/* Elementos inferiores*/}
                                <div className="absolute bottom-0 left-15 w-3 md:w-5 h-3 md:h-5 bg-white"></div>
                                <div className="absolute -bottom-3 md:-bottom-5 left-15 w-3 md:w-5 h-3 md:h-5 bg-rojo-primario"></div>
                                <div className="absolute -bottom-6 md:-bottom-10 left-10 w-3 md:w-5 h-3 md:h-5 bg-[#1e3a5f]"></div>

                                {/* Ícono */}
                                <div className="hidden sm:block absolute left-6 sm:left-12 md:left-25 top-1/2 transform -translate-y-1/2">
                                    <GiTargeting className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-azul-primario" />
                                    <div className="absolute top-10 sm:top-12 md:top-15 left-12 sm:left-16 md:left-20 w-10 sm:w-12 md:w-15 origin-top-left -rotate-90 border border-white md:border-2"></div>
                                </div>

                                {/* Texto del título */}
                                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold font-['Poppins'] text-center">
                                    <span className="text-white">Nuestra</span>
                                    <span className="text-[#1e3a5f]"> misión </span>
                                    <span className="text-white">y</span>
                                    <span className="text-[#1e3a5f]"> visión</span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-screen-lg mx-auto px-4 py-8">
                        <div className="flex flex-col md:flex-row items-center justify-between">

                            {/* Columna 1 - Misión */}
                            <div className="flex-1 flex flex-col items-center md:items-end gap-10 mb-16 md:mb-0">
                                {/* Icono visión y línea */}
                                <div className="flex flex-row items-center w-full">
                                    <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                                        <div className="absolute inset-1 rounded-full border-2 border-[#4f8cdd]" />
                                        <div className="absolute inset-0 rounded-full border border-[#ff3636]/90" />
                                        <div className="absolute inset-2 bg-[#c8ddf8] rounded-full border-4 border-[#0056c9]" />
                                        <FaEye className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-16 h-16 md:w-20 md:h-20 text-azul-primario" />
                                    </div>
                                    <div className="h-0.5 bg-[#ff3636]/90 flex-grow "></div>
                                </div>
                                {/* Contenido Misión */}
                                <div className=" px-4">
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Mision.</h2>
                                    <p className="text-lg md:text-xl text-[#1e3a5f]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id congue sapien.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id congue sapien.
                                    </p>
                                </div>
                            </div>

                            {/* Línea central decorativa - visible solo en desktop */}
                            <div className="hidden md:flex flex-col items-center justify-center h-60">
                                <div className="w-4 h-4 bg-[#ff3636] rounded-full"></div>
                                <div className="w-0.5 h-48 bg-[#ff3636]" ></div>
                                <div className="w-4 h-4 bg-[#ff3636] rounded-full"></div>
                            </div>

                            {/* Columna 2 - Visión */}
                            <div className="flex-1 flex flex-col items-center md:items-start gap-10">
                                {/* Contenido Visión */}
                                <div className="w-full text-left px-4">
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Vision.</h2>
                                    <p className="text-lg md:text-xl text-[#1e3a5f]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id congue sapien.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id congue sapien.
                                    </p>
                                </div>

                                {/* Icono misión y línea */}
                                <div className="flex items-center w-full">
                                    <div className="h-0.5 bg-[#ff3636]/90 flex-grow "></div>
                                    <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                                        <div className="absolute inset-1 rounded-full border-2 border-[#4f8cdd]" />
                                        <div className="absolute inset-0 rounded-full border border-[#d32f2f]" />
                                        <div className="absolute inset-2 bg-[#c8ddf8] rounded-full border-4 border-[#0056c9]" />
                                        <FaRocket className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-16 h-16 md:w-20 md:h-20 text-azul-primario" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="w-full min-h-[500px] md:h-[736px] bg-white relative overflow-hidden">
                    <div className="w-full h-full relative">
                        {/* Fondo con gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3a416f] to-[#141727] z-0" />

                        {/* SVG de arriba y abajo */}
                        <svg className="absolute top-0 left-0 w-full h-full z-0" viewBox="0 0 1440 736" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M1440 0H0V72.6017C289.125 143.388 502.54 114.689 771 62.619C976.875 22.688 1184.25 6.35265 1440 60.8039V0Z" fill="white" />
                            <path d="M0 736L1440 736V652.397C1150.88 564.478 937.46 600.124 669 664.796C463.125 714.392 255.75 734.681 0 667.051V736Z" fill="#F8F9FA" />
                        </svg>

                        {/* Contenido centrado - Cambio del orden de los elementos */}
                        <div className="relative z-10 flex flex-col-reverse md:flex-row justify-between items-center w-full h-full max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-0 gap-8 md:gap-0">
                            {/* Texto */}
                            <div className="max-w-full md:max-w-[773px] text-white mb-30 md:mb-0">
                                <div className="relative flex items-center space-x-3">
                                    <span className="text-[#d32f2f] text-2xl md:text-[40px] font-medium font-['Poppins'] [text-shadow:_0px_0px_45px_rgb(255_49_49_/_1.00)]">✦</span>
                                    <h2 className="text-white text-3xl md:text-5xl font-bold font-['Poppins']">¿Quiénes somos?</h2>
                                </div>
                                <p className="text-lg md:text-2xl text-white/90 mt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id congue sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <ul className="mt-6 space-y-3 ml-4 md:ml-10">
                                    <li className="flex items-center space-x-2 md:space-x-4">
                                        <Lightbulb className="w-6 h-6 md:w-8 md:h-8  text-azul-primario-claro" />
                                        <span className="text-base md:text-xl text-white/90">Lorem ipsum dolor sit amet.</span>
                                    </li>
                                    <li className="flex items-center space-x-2 md:space-x-4">
                                        <Sparkles className="w-6 h-6 md:w-8 md:h-8  text-azul-primario-claro" />
                                        <span className="text-base md:text-xl text-white/90">Curabitur id congue sapien.</span>
                                    </li>
                                    <li className="flex items-center space-x-2 md:space-x-4">
                                        <Globe className="w-6 h-6 md:w-8 md:h-8 text-azul-primario-claro" />
                                        <span className="text-base md:text-xl text-white/90">Vestibulum dapibus augue.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Imagen */}
                            <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[378px] lg:h-[378px] rounded-full border-2 border-[#d32f2f] relative flex-shrink-0 mt-20 md:mt-0">
                                <img
                                    src={logo}
                                    alt="Imagen"
                                    className="absolute inset-0 w-[180px] h-[180px] sm:w-[230px] sm:h-[230px] md:w-[280px] md:h-[280px] lg:w-[338px] lg:h-[344px] rounded-full object-cover m-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default AboutUs;