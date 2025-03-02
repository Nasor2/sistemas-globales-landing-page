import React from 'react';
import { Lightbulb, Sparkles, Globe } from "lucide-react";
import logo from '../../assets/icons/logo.png';

const Who = () => {
    return (
        <section className="w-full min-h-[500px] md:h-[736px] bg-white relative overflow-hidden">
            <div className="w-full h-full relative">
                {/* Fondo con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3a416f] to-[#141727] z-0" />

                {/* SVG de arriba y abajo */}
                <svg className="absolute top-0 left-0 w-full h-full z-0" viewBox="0 0 1440 736" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M1440 0H0V72.6017C289.125 143.388 502.54 114.689 771 62.619C976.875 22.688 1184.25 6.35265 1440 60.8039V0Z" fill="white" />
                    <path d="M0 736L1440 736V652.397C1150.88 564.478 937.46 600.124 669 664.796C463.125 714.392 255.75 734.681 0 667.051V736Z" fill="#F8F9FA" />
                </svg>

                {/* Contenedor centrado con ancho máximo */}
                <div className="flex justify-center w-full h-full">
                    {/* Contenido centrado - Cambio del orden de los elementos */}
                    <div className="relative z-10 flex flex-col-reverse md:flex-row justify-between items-center w-full h-full max-w-[1000px] mx-auto px-4 md:px-6 py-8 md:py-0 gap-8 md:gap-0">
                        {/* Texto */}
                        <div className="max-w-full md:max-w-[600px] text-white mb-30 md:mb-0">
                            <div className="relative flex items-center space-x-3">
                                <span className="text-[#d32f2f] text-2xl md:text-[40px] font-medium font-['Poppins'] [text-shadow:_0px_0px_45px_rgb(255_49_49_/_1.00)]">✦</span>
                                <h2 className="text-white text-3xl md:text-5xl font-bold font-['Poppins']">¿Quiénes somos?</h2>
                            </div>
                            <p className="text-lg md:text-2xl text-white/90 mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id congue sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <ul className="mt-6 space-y-3 ml-4 md:ml-10">
                                <li className="flex items-center space-x-2 md:space-x-4">
                                    <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-azul-primario-claro" />
                                    <span className="text-base md:text-xl text-white/90">Lorem ipsum dolor sit amet.</span>
                                </li>
                                <li className="flex items-center space-x-2 md:space-x-4">
                                    <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-azul-primario-claro" />
                                    <span className="text-base md:text-xl text-white/90">Curabitur id congue sapien.</span>
                                </li>
                                <li className="flex items-center space-x-2 md:space-x-4">
                                    <Globe className="w-6 h-6 md:w-8 md:h-8 text-azul-primario-claro" />
                                    <span className="text-base md:text-xl text-white/90">Vestibulum dapibus augue.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Imagen - Reducida de tamaño para escritorio */}
                        <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] rounded-full border-2 border-[#d32f2f] relative flex-shrink-0 mt-20 md:mt-0">
                            <img
                                src={logo}
                                alt="Imagen"
                                className="absolute inset-0 w-[180px] h-[180px] sm:w-[230px] sm:h-[230px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] rounded-full object-cover m-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Who;