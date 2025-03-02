import React from 'react';
import { testimonials2 } from '../../data/testimonialsData';

const Testimonials = () => {

  // Function to render stars based on rating
  const renderStars = (rating, ratingColor) => {
    return (
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`w-6 h-6 ${i < rating ? ratingColor : "bg-gray-200"} mr-1 flex items-center justify-center`}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="white" 
              className="w-4 h-4"
            >
              <path 
                fillRule="evenodd" 
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-azul-primario mb-2">Descubre por qué nos eligen</h1>
        <p className="text-negro-suave">Experiencias de quienes ya trabajan con nosotros</p>
        <div className="mt-6">
          <button className="bg-rojo-primario hover:bg-red-700 text-white px-6 py-3 rounded-full transition-colors">
            Explorar opiniones
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials2.map((testimonial, index) => (
          <div key={index} className="rounded-lg p-6 shadow-sm hover:shadow-md border-l-4 border-azul-primario transition-shadow bg-white">
            {renderStars(testimonial.rating, testimonial.ratingColor)}
            <p className="text-gray-700 mb-5">{testimonial.comment}</p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full mr-3">
                <img 
                  src={testimonial.img || "/api/placeholder/36/36"} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover rounded-full object-center ring-2 ring-rojo-primario z-30"
                />
              </div>
              <div>
                <h4 className="font-bold text-azul-primario">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;