import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  const { name, role, company, avatar, quote } = testimonial;
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs">
      <div className="flex items-center mb-2">
        <img 
          src={avatar} 
          alt={name}
          className="w-10 h-10 rounded-full mr-3"
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