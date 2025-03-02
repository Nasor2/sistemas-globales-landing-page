import React, { useState, useEffect } from 'react';
import { testimonials2 } from '../../data/testimonialsData';
import { Users } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  


  const maxIndex = testimonials2.length - 3; // Ajuste para evitar avanzar más allá del máximo

  const goToPrev = () => {
    if (isAnimating || currentIndex === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating || currentIndex >= maxIndex) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex || index > maxIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="bg-white py-6 px-4 w-full lg:py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto items">
        {/* Testimonials Header */}
        {/* Testimonials Header */}
<div className="mb-4 md:mb-6">
  <span className="bg-azul-primario/10 text-azul-primario text-lg font-medium px-3 py-1 rounded-full inline-flex items-center">
    <Users className="mr-2 h-4 w-4" /> NUESTROS CLIENTES
  </span>
</div>
        
        {/* Title and Navigation - Only visible on non-mobile */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-azul-primario mb-4 md:mb-0">Descubre por qué nos eligen</h2>
          
          {/* Navigation buttons - Only visible on larger screens */}
          <div className="hidden md:flex gap-2">
            <button 
              onClick={goToPrev}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 transition duration-300"
              disabled={isAnimating}
              aria-label="Previous testimonial"
            >
              <span className="text-gray-600">&lt;</span>
            </button>
            <button 
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 transition duration-300"
              disabled={isAnimating}
              aria-label="Next testimonial"
            >
              <span className="text-gray-600">&gt;</span>
            </button>
          </div>
        </div>
        
        {/* Mobile View - Vertical Stacked Testimonials */}
        <div className="md:hidden space-y-6">
          {testimonials2.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow-sm"
            >
              {/* Quote Icon */}
              <div className="text-rojo-primario mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-rojo-primario">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              {/* Testimonial Text */}
              <p className="text-sm text-negro-suave mb-4">
                "{testimonial.quote}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-8 h-8 rounded-full mr-3 object-cover object-center"
                />
                <div>
                  <p className="font-semibold text-black text-sm">{testimonial.author}</p>
                  <p className="text-gray-600 text-xs">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Desktop View - Carousel */}
        <div className="relative hidden md:block overflow-x-clip">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }}
          >
            {/* Render all testimonials in a row */}
            {testimonials2.map((testimonial, index) => (
              <div 
                key={index} 
                className="min-w-[33.33%] px-3 transition-all duration-300 "
              >
                
                <div className="bg-white p-6 rounded-lg shadow-sm h-full ">
                  {/* Quote Icon */}
                  <div className="text-rojo-primario mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-rojo-primario">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-negro-suave mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author Info */}
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-10 h-10 rounded-full mr-3 object-cover object-center"
                    />
                    <div>
                      <p className="font-semibold text-azul-primario">{testimonial.author}</p>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Overlay gradient for right-side fade effect */}
          <div className="absolute top-0 right-0 w-2/6 h-full bg-gradient-to-l from-gray-50/90 to-transparent pointer-events-none"></div>
        </div>
        
        {/* Indicator Dots - Only visible on desktop */}
                {/* Indicator Dots - Only visible on desktop */}
                <div className="hidden md:flex justify-center mt-10 gap-1">
          {testimonials2.slice(0, 2).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`mx-1 transition-all duration-300 rounded-full ${
                currentIndex === index 
                  ? 'w-4 h-2 bg-rojo-primario' 
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentIndex === index ? 'true' : 'false'}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;