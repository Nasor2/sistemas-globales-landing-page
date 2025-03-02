import React from 'react';
import { values } from '../../data/valuesData'

const valuesSection = () => {
    return (
        <div className="flex justify-center w-full bg-white py-8">
            {/* Container with limited width */}
            <div className="w-full max-w-5xl px-4 sm:px-6">
                {/* Title Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
                    <div className="flex items-center gap-2">
                        <div className="text-[#d32f2f] text-4xl font-medium font-['Poppins'] [text-shadow:_0px_0px_45px_rgb(255_49_49_/_1.00)]">✦</div>
                        <div>
                            <span className="text-[#4f8cdd] text-3xl sm:text-4xl md:text-5xl font-bold font-['Poppins']">Valores</span>
                            <span className="text-[#1e3a5f] text-3xl sm:text-4xl md:text-5xl font-bold font-['Poppins']"> Coorporativos.</span>
                        </div>
                    </div>

                    {/* Title decoration  */}
                    <div className="relative w-full sm:w-auto flex-grow h-5">
                        <div className="absolute left-0 right-0 h-4 border-b-3 border-[#d32f2f]"></div>
                        <div className="absolute right-25 top-1.5 w-4 h-4 bg-[#d32f2f] border border-[#d32f2f]"></div>
                    </div>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
                    {values.map((value, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="flex items-center gap-2 p-2.5">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-b from-blue-400/20 to-blue-500/20 absolute blur-md"></div>
                                <value.icon className="w-[38px] h-[38px] text-azul-primario-oscuro" />
                                <div className="text-[#1e3a5f] text-xl font-bold font-['Poppins']">{value.title}</div>
                            </div>
                            <div className="flex gap-4 pl-[30px] py-2.5">
                                <div className="min-w-[2px] h-12 bg-[#ff3131]"></div>
                                <div className="text-[#1e3a5f] text-sm font-normal font-['Poppins']">{value.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default valuesSection;