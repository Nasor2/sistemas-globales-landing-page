import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  const { name, role, company, avatar, quote } = testimonial;
  
  return (
    <div className="bg-white/80 rounded-[10px] max-h-100 border-1 shadow-lg p-3 max-w-xs">
      <div className="flex items-center mb-2">
        <img 
          src={avatar} 
          alt={name}
          className="w-12 h-12 rounded-full mr-3 object-cover object-center"
        />
        <div>
          <h4 className="font-semibold text-sm">{name}</h4>
          <p className="text-xs text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-sm">{quote}</p>
    </div>
  );
};

export default TestimonialCard;