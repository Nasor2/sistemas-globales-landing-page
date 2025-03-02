import React from 'react';

// Componente flexible para título con colores dinámicos por palabra
const TitleSection = ({textSegments = [] }) => {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
            <div className="flex items-center gap-2">
                {/* Icono */}
                <div className="text-[#d32f2f] text-4xl font-medium font-['Poppins'] [text-shadow:_0px_0px_45px_rgb(255_49_49_/_1.00)]">✦</div>

                {/* Título dinámico (recorre el array en el orden recibido) */}
                <div className="flex flex-wrap items-center">
                    {textSegments.map((segment, index) => (
                        <span
                            key={index}
                            className={`${segment.color} text-3xl sm:text-4xl md:text-5xl font-bold font-['Poppins']`}
                        >
                            {segment.text}{'‎ '}
                        </span>
                    ))}
                </div>
            </div>

            {/* Línea decorativa debajo */}
            <div className="relative w-full sm:w-auto flex-grow h-5">
                <div className="absolute left-0 right-0 h-4 border-b-3 border-[#d32f2f]"></div>
                <div className="absolute right-35 sm:right-10 top-1.5 w-4 h-4 bg-[#d32f2f] border border-[#d32f2f]"></div>
            </div>
        </div>
    );
};

export default TitleSection;
