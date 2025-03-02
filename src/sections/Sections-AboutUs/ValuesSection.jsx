import React from 'react';
import { values } from '../../data/DataAboutUs'
import TitleSection from '../../components/AbourComponents/TitleSection';

const textSegments = [
    { text: 'Valores ', color: 'text-azul-primario'},
    { text: 'Cooporativos', color: 'text-blue-400'},
];

const valuesSection = () => {
    return (
        <div className="flex justify-center w-full bg-white py-8">
            {/* Container with limited width */}
            <div className="w-full max-w-5xl px-4 sm:px-6">
                <TitleSection textSegments={textSegments} />

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