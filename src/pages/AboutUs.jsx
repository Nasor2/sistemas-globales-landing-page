import React from 'react';
import Header from '../components/Header';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaRocket, FaEye } from 'react-icons/fa';
import showcaseImage from '../assets/images/showcase-1.png';
import { GiTargeting } from 'react-icons/gi';

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
                                <FaFacebook className="inline-block text-xl md:text-2xl cursor-pointer" />
                                <FaInstagram className="inline-block text-xl md:text-2xl cursor-pointer" />
                                <FaTwitter className="inline-block text-xl md:text-2xl cursor-pointer" />
                                <FaLinkedin className="inline-block text-xl md:text-2xl cursor-pointer" />
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


                {/* Sección de Misión y Visión */}
                <div className="w-full max-w-[1440px] h-[806px] relative bg-white rounded-[5px] overflow-hidden mx-auto mt-13">
                    {/* Titulo */}
                    <div className="w-[983px] h-48 left-[200px] top-[13px] absolute ">
                        <div className="w-[983px] h-28 left-0 top-[30px] absolute bg-rojo-primario rounded-[100px]" />
                        <div className="w-[909px] h-48 left-[33px] top-0 absolute">
                            <div className="w-5 h-5 left-[869px] top-[30px] absolute bg-white" />
                            <div className="w-5 h-5 left-[20px] top-[122px] absolute bg-white" />
                            <div className="w-5 h-5 left-[869px] top-[10px] absolute bg-rojo-primario" />
                            <div className="w-5 h-5 left-[20px] top-[142px] absolute bg-rojo-primario" />
                            <div className="w-5 h-5 left-[889px] bottom-45 absolute bg-[#1e3a5f]" />
                            <div className="w-5 h-5 left-0 top-[162px] absolute bg-[#1e3a5f]" />
                        </div>
                        <div className="w-[595px] h-[72px] left-[233px] top-[60px] absolute">
                            <span className="text-white text-5xl font-bold font-['Poppins']">Nuestra</span>
                            <span className="text-[#1e3a5f] text-5xl font-bold font-['Poppins']"> misión </span>
                            <span className="text-white text-5xl font-bold font-['Poppins']">y</span>
                            <span className="text-[#1e3a5f] text-5xl font-bold font-['Poppins']"> visión</span>
                        </div>
                        <GiTargeting className='w-[74px] h-[81px] left-[90px] top-[45px] absolute text-azul-primario' />
                        <div className="w-[55px] left-[199px] top-[115px] absolute origin-top-left -rotate-90 border-2 border-white"></div>
                    </div>

                    {/* Contenido */}
                    <div className="w-full max-w-[1166px] h-[160px] mx-auto relative top-[205px] mt-15">
                        {/* Icono vision */}
                        <div className="w-[170px] h-[170px] absolute left-[132px] top-[10px]">
                            <div className="w-[155.05px] h-[155.05px] left-[7.08px] top-[7.08px] absolute rounded-full border-2 border-[#4f8cdd]" />
                            <div className="w-[170px] h-[170px] left-0 top-0 absolute rounded-full border border-rojo-primario/90" />
                            <div className="w-[138.52px] h-[138.52px] left-[15.74px] top-[15.74px] absolute bg-[#c8ddf8] rounded-full border-4 border-[#0056c9]" />
                            <FaEye className='w-[100.74px] h-[100.74px] left-[34.63px] top-[34.63px] absolute text-azul-primario' />
                        </div>

                        {/* icono mision */}
                        <div className="w-[170px] h-[170px] left-[862px] top-[290px] absolute">
                            <div className="w-[155.05px] h-[155.05px] left-[7.08px] top-[7.08px] absolute rounded-full border-2 border-[#4f8cdd]" />
                            <div className="w-[170px] h-[170px] left-0 top-0 absolute rounded-full border border-[#d32f2f]" />
                            <div className="w-[138.52px] h-[138.52px] left-[15.74px] top-[15.74px] absolute bg-[#c8ddf8] rounded-full border-4 border-[#0056c9]" />
                            <FaRocket className="w-[100.74px] h-[95px] left-[25px] top-[40.63px] absolute text-azul-primario" />
                        </div>

                        {/* Lineas */}
                        <div className="w-[560px] h-[296px] absolute left-[302px] top-[87px]">
                            <div className="w-[560px] h-[280.50px] left-0 top-[8px] absolute">
                                <div className="w-[280px] h-[0px] left-0 top-[0.50px] absolute bg-rojoborder-rojo-primario/90 border-2 border-rojo-primario/90"></div>
                                <div className="w-[280px] h-[0px] left-[280px] top-[280.50px] absolute bg-rojoborder-rojo-primario/90 border-2 border-rojo-primario/90"></div>
                                <div className="w-[280px] h-[0px] left-[280px] top-[280px] absolute origin-top-left -rotate-90 bg-rojoborder-rojo-primario/90 border-2 border-rojo-primario/90"></div>
                            </div>
                            <div className="w-4 h-4 left-[274px] top-1 absolute bg-rojo-primario rounded-full" />
                            <div className="w-4 h-4 left-[275px] top-[280px] absolute bg-rojo-primario rounded-full" />
                        </div>

                        {/* Texto */}
                        <div className="w-[507px] h-48 left-8 top-[235px] absolute">
                            <div className="w-[473.99px] h-[72px] left-0 top-0 absolute text-[#1e3a5f] text-4xl font-bold font-['Poppins']">Mision.</div>
                            <div className="w-[503px] h-[120px] left-[4px] top-[72px] absolute text-[#1e3a5f] text-xl font-normal font-['Poppins']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id congue sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id congue sapien.</div>
                        </div>
                        <div className="w-[509px] h-[222px] left-[657px] top-0 absolute">
                            <div className="w-[475.86px] h-[72px] left-0 top-0 absolute text-[#1e3a5f] text-4xl font-bold font-['Poppins']">Vision.</div>
                            <div className="w-[504.56px] h-[150px] left-[4.44px] top-[72px] absolute text-[#1e3a5f] text-xl font-normal font-['Poppins']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id congue sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id congue sapien.</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AboutUs;