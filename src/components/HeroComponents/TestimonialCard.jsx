import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  const { name, role, company, avatar, quote } = testimonial;
  
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg border-l-4 border-azul-primario shadow-lg p-3 w-64 transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center gap-2 mb-2">
        <div className="relative">
          <img 
            src={avatar || "/api/placeholder/36/36"} 
            alt={name}
            className="w-10 h-10 rounded-full object-cover object-center"
          />
          
        </div>
        <div>
          <h4 className="font-bold text-sm text-azul-primario">{name}</h4>
          <p className="text-xs font-medium text-gray-600">{role}</p>
        </div>
      </div>
      <div className="relative pl-3 border-l border-gray-200">
        <p className="text-xs leading-tight text-gray-800 italic">{quote}</p>
      </div>
      {company && (
        <div className="flex justify-end mt-1">
          <span className="text-xs bg-rojo-primario/10 text-rojo-primario px-2 py-0.5 rounded-full font-medium">{company}</span>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;