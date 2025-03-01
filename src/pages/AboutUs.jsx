import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEye, FaRocket } from 'react-icons/fa';
import showcaseImage from '../assets/images/showcase-1.png';
import { GiTargeting } from "react-icons/gi";

const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-white">
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
                        <div className="w-full h-full left-0 top-0 absolute opacity-90 bg-gradient-to-t from-azul-primario to-azul-primario-claro" />
                    </div>

                    <div data-svg-wrapper className="absolute bottom-0 left-0 w-full">
                        <svg width="100%" height="100%" viewBox="0 0 1440 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 53.6386L0 110L1450 110V9.30096C1413.15 19.3208 1327.54 42.5166 1279.86 55.1416C1220.25 70.9228 1145.48 79.9406 1034.94 91.2129C924.402 102.485 734.753 53.6386 722.833 51.3841C710.912 49.1297 610.127 13.0584 417.227 4.79205C262.907 -1.82102 74.7758 34.601 0 53.6386Z" fill="white" />
                            <path opacity="0.6" d="M0 50.3997L0 94L1450 94V16.1007C1413.15 23.8519 1327.54 41.7959 1279.86 51.5623C1220.25 63.7704 1145.48 70.7465 1034.94 79.4666C924.402 88.1866 734.753 50.3997 722.833 48.6557C710.912 46.9116 610.127 19.0074 417.227 12.6127C262.907 7.49695 74.7758 35.6724 0 50.3997Z" fill="white" />
                            <path opacity="0.15" d="M1450 38.3997V82L0.00012207 82V4.10075C36.8461 11.8519 122.459 29.7959 170.142 39.5623C229.746 51.7704 304.522 58.7465 415.06 67.4666C525.598 76.1866 715.247 38.3997 727.167 36.6557C739.088 34.9116 839.873 7.00744 1032.77 0.612724C1187.09 -4.50305 1375.22 23.6725 1450 38.3997Z" fill="white" />
                            <path opacity="0.2" d="M1450 61.3997V105L0 105V27.1007C36.8461 34.8519 122.459 52.7959 170.142 62.5623C229.746 74.7704 304.522 81.7465 415.06 90.4666C525.598 99.1866 715.247 61.3997 727.167 59.6557C739.088 57.9116 839.873 30.0074 1032.77 23.6127C1187.09 18.4969 1375.22 46.6724 1450 61.3997Z" fill="white" />
                        </svg>
                    </div>
                </div>

                <div className="absolute w-[967px] left-1/2 transform -translate-x-1/2" style={{ top: '250px' }}>
                    <h1 className="text-center text-5xl font-bold" style={{ width: '967px', height: '140px' }}>
                        <span className="text-blanco-arena">Transformamos Espacios en </span>
                        <span className="text-rojo-primario">Oportunidades</span>
                        <span className="text-blanco-arena"> Publicitarias.</span>
                    </h1>
                    <p className="text-center text-sm w-[761px] mx-auto mt-1" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. id sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id congue sapien.
                    </p>

                    <div className="w-[854.03px] h-[26.74px] text-center text-blanco-arena text-base font-semibold font-['Open Sans'] mx-auto mt-20">Find us on</div>
                    <div className="mt-2 space-x-6 text-center text-blanco-arena">
                        <FaFacebook className="inline-block text-2xl cursor-pointer" />
                        <FaInstagram className="inline-block text-2xl cursor-pointer" />
                        <FaTwitter className="inline-block text-2xl cursor-pointer" />
                        <FaLinkedin className="inline-block text-2xl cursor-pointer" />
                    </div>
                </div>

                {/* Sección de Misión y Visión */}
                <div className="w-full max-w-[1440px] h-[806px] relative bg-white rounded-[5px] overflow-hidden mx-auto mt-13">
                    <div className="w-full max-w-[1166px] h-[160px] mx-auto relative top-[205px] mt-15">
                        <div className="w-[170px] h-[170px] absolute left-[132px] top-[10px]">
                            <div className="w-[155.05px] h-[155.05px] left-[7.08px] top-[7.08px] absolute rounded-full border-2 border-[#4f8cdd]" />
                            <div className="w-[170px] h-[170px] left-0 top-0 absolute rounded-full border border-rojo-primario/90" />
                            <div className="w-[138.52px] h-[138.52px] left-[15.74px] top-[15.74px] absolute bg-[#c8ddf8] rounded-full border-4 border-[#0056c9]" />
                            <FaEye className='w-[100.74px] h-[100.74px] left-[34.63px] top-[34.63px] absolute text-azul-primario' />
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

                        <div className="w-[507px] h-48 left-0 top-[235px] absolute">
                            <div className="w-[473.99px] h-[72px] left-0 top-0 absolute text-[#1e3a5f] text-4xl font-bold font-['Poppins']">Mision.</div>
                            <div className="w-[503px] h-[120px] left-[4px] top-[72px] absolute text-[#1e3a5f] text-xl font-normal font-['Poppins']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id congue sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id congue sapien.</div>
                        </div>
                        <div className="w-[509px] h-[222px] left-[657px] top-0 absolute">
                            <div className="w-[475.86px] h-[72px] left-0 top-0 absolute text-[#1e3a5f] text-4xl font-bold font-['Poppins']">Vision.</div>
                            <div className="w-[504.56px] h-[150px] left-[4.44px] top-[72px] absolute text-[#1e3a5f] text-xl font-normal font-['Poppins']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id congue sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id congue sapien.</div>
                        </div>

                        {/* icono mision */}
                        <div className="w-[170px] h-[170px] left-[862px] top-[290px] absolute">
                            <div className="w-[155.05px] h-[155.05px] left-[7.08px] top-[7.08px] absolute rounded-full border-2 border-[#4f8cdd]" />
                            <div className="w-[170px] h-[170px] left-0 top-0 absolute rounded-full border border-[#d32f2f]" />
                            <div className="w-[138.52px] h-[138.52px] left-[15.74px] top-[15.74px] absolute bg-[#c8ddf8] rounded-full border-4 border-[#0056c9]" />
                            <FaRocket className="w-[100.74px] h-[95px] left-[25px] top-[40.63px] absolute text-azul-primario" />
                        </div>
                    </div>
                    <div className="w-[983px] h-48 left-[228px] top-[13px] absolute ">
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
                        <GiTargeting className='w-[74px] h-[81px] left-[90px] top-[55px] absolute text-azul-primario' />
                        <div className="w-[55px] h-[0px] left-[199px] top-[95px] absolute origin-top-left -rotate-90 border-2 border-white"></div>
                    </div>
                </div>

                <div className="w-full h-[736px] bg-white relative overflow-hidden">
                    <div className="w-full h-full relative">
                        {/* Fondo con gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3a416f] to-[#141727] z-0" />

                        {/* SVG de arriba y abajo */}
                        <svg className="absolute top-0 left-0 w-full h-full z-0" viewBox="0 0 1440 736" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M1440 0H0V72.6017C289.125 143.388 502.54 114.689 771 62.619C976.875 22.688 1184.25 6.35265 1440 60.8039V0Z" fill="white" />
                            <path d="M0 736L1440 736V652.397C1150.88 564.478 937.46 600.124 669 664.796C463.125 714.392 255.75 734.681 0 667.051V736Z" fill="#F8F9FA" />
                        </svg>

                        {/* Contenido de la sección */}
                        <div className="relative z-10 flex justify-between items-center w-full h-full px-[5%]">
                            {/* Texto */}
                            <div className="max-w-[773px] text-white">
                                <div className="relative flex items-center space-x-3">
                                    <span className="text-[#d32f2f] text-[40px] font-medium font-['Poppins'] [text-shadow:_0px_0px_45px_rgb(255_49_49_/_1.00)]">✦</span>
                                    <h2 className="text-white text-5xl font-bold font-['Poppins']">¿Quiénes somos?</h2>
                                </div>
                                <p className="text-2xl text-white/90 mt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id congue sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <ul className="mt-6 space-y-3 ml-10">
                                    <li className="flex items-center space-x-4">
                                        <img src="https://placehold.co/32x32" alt="icono" className="w-8 h-8" />
                                        <span className="text-xl text-white/90">Lorem ipsum dolor sit amet.</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <img src="https://placehold.co/32x32" alt="icono" className="w-8 h-8" />
                                        <span className="text-xl text-white/90">Curabitur id congue sapien.</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <img src="https://placehold.co/32x32" alt="icono" className="w-8 h-8" />
                                        <span className="text-xl text-white/90">Vestibulum dapibus augue.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Imagen */}
                            <div className="w-[378px] h-[378px] rounded-full border-2 border-[#d32f2f] relative">
                                <img src="https://placehold.co/338x344" alt="Imagen" className="absolute inset-0 w-[338px] h-[344px] rounded-full object-cover m-auto" />
                            </div>
                        </div>
                    </div>
                </div>

                


            </main>
        </div>
    );
};

export default AboutUs;