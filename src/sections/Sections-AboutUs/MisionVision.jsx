import React from 'react';
import { FaEye, FaRocket } from 'react-icons/fa';
import { GiTargeting } from 'react-icons/gi';

const MisionVision = () => {
    return (
        <section className="w-full max-w-[1440px] mx-auto py-10 px-4 bg-white rounded-[5px] overflow-hidden">
            {/* Título */}
            <div className="relative flex flex-col items-center mb-16">
                <div className="relative w-full max-w-[983px] flex flex-col items-center">
                    <div className="relative w-full bg-rojo-primario rounded-[100px] py-4 md:py-6 px-4 md:px-8 flex items-center justify-center">

                        {/* ----------------- Elementos decorativos ----------------*/}
                        {/* Elementos superiores */}
                        <div className="absolute top-0 right-15 w-3 md:w-5 h-3 md:h-5 bg-white"></div>
                        <div className="absolute -top-3 md:-top-5 right-15 w-3 md:w-5 h-3 md:h-5 bg-rojo-primario"></div>
                        <div className="absolute -top-6 md:-top-10 right-12 md:right-10 w-3 md:w-5 h-3 md:h-5 bg-[#1e3a5f]"></div>

                        {/* Elementos inferiores*/}
                        <div className="absolute bottom-0 left-15 w-3 md:w-5 h-3 md:h-5 bg-white"></div>
                        <div className="absolute -bottom-3 md:-bottom-5 left-15 w-3 md:w-5 h-3 md:h-5 bg-rojo-primario"></div>
                        <div className="absolute -bottom-6 md:-bottom-10 left-12 md:left-10 w-3 md:w-5 h-3 md:h-5 bg-[#1e3a5f]"></div>

                        {/* Div que agrupa el ícono y título */}
                        <div className="flex flex-row items-center">
                            {/* Ícono */}
                            <div className="hidden sm:block absolute sm:left-20 top-1/2 transform -translate-y-1/2">
                                <GiTargeting className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-azul-primario" />
                                <div className="absolute top-10 sm:top-12 md:top-15 left-10 sm:left-17 w-10 sm:w-12 md:w-15 origin-top-left -rotate-90 border border-white md:border-2"></div>
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
            </div>

            <div className="w-full max-w-screen-lg mx-auto px-4 py-5">
                <div className="flex flex-col md:flex-row items-center justify-between">

                    {/* Columna 1 - Misión */}
                    <div className="flex-1 flex flex-col items-center md:items-end gap-10 mb-16 md:mb-0">
                        {/* Icono visión y línea */}
                        <div className="flex flex-row items-center w-full">
                            <IconCircle icon={<FaEye className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-16 h-16 md:w-20 md:h-20 text-azul-primario" />} />
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
                    <div className="hidden md:flex flex-col items-center justify-center h-full">
                        <div className="w-4 h-4 bg-[#ff3636] rounded-full"></div>
                        <div className="w-0.5 h-48 md:max-lg:h-55 bg-[#ff3636]" ></div>
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
                            <IconCircle icon={<FaRocket className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-16 h-16 md:w-20 md:h-20 text-azul-primario" />} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const IconCircle = ({ icon }) => (
    <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
        <div className="absolute inset-1 rounded-full border-2 border-[#4f8cdd]" />
        <div className="absolute inset-0 rounded-full border border-[#ff3636]/90" />
        <div className="absolute inset-2 bg-[#c8ddf8] rounded-full border-4 border-[#0056c9]" />
        {icon}
    </div>
);

export default MisionVision;