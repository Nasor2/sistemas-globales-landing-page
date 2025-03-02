import React from "react";
import { Phone } from "lucide-react";
import Fondo from "../../assets/images/showcase-2.png";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg p-5 flex items-start shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-[#E0DFEB] h-full">
      <div className="mr-3 flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-[#E0DFEB] flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-lg text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm lg:text-base">{description}</p>
      </div>
    </div>
  );
};

const ServicesTop = () => {
    const serviceCards = [
        { 
          title: "Lorem Ipsum", 
          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit", 
          icon: (
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          )
        },
        { 
          title: "Lorem Ipsum", 
          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit", 
          icon: (
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          )
        },
        { 
          title: "Lorem Ipsum", 
          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit", 
          icon: (
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          )
        },
        { 
          title: "Lorem Ipsum", 
          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit", 
          icon: (
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )
        }
      ];

  return (
    <section className="max-w-screen w-full bg-[#333333] py-20 lg:py-24 relative">
      {/* Fondo de imagen con opacidad */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${Fondo})`, 
            opacity: ".6",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#222222] via-transparent to-[#222222]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide relative inline-block">
            SERVICIOS
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-500 rounded-full"></span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Video Frame - Cambiado a fondo negro sólido */}
          <div className="aspect-video lg:aspect-auto lg:h-full bg-black rounded-lg overflow-hidden flex items-center justify-center shadow-lg transition-all duration-300 group relative min-h-[360px] ring-2 ring-white/10 ring-offset-2 ring-offset-gray-800/10 animate-slide-up">
            {/* Eliminado el gradient overlay para mejor visibilidad */}
            
            <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm cursor-pointer rounded-full transition-all duration-300 transform group-hover:scale-110 z-10 shadow-lg hover:shadow-red-500/20">
              <div className="w-10 h-10 flex items-center justify-center bg-red-500 rounded-full">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3" className="animate-pulse"></polygon>
                </svg>
              </div>
            </div>
          </div>

          {/* Service Cards - Con animaciones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {serviceCards.map((card, index) => (
              <div 
                key={index} 
                className="h-full animate-slide-in" 
                style={{ 
                  minHeight: "calc(80px + 20%)",
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <ServiceCard 
                  {...card}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Contact Bar - Larger and better distributed */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-500 text-white rounded-lg py-6 px-6 shadow-xl relative overflow-hidden animate-fade-in">
            {/* Background pattern for added visual interest */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white"></div>
              <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-white"></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              {/* Phone Section */}
              <div className="flex items-center flex-1 min-w-[250px]">
                <div className="w-14 h-14 rounded-full bg-red-600/50 flex items-center justify-center mr-4 shadow-md">
                  <Phone className="w-7 h-7 animate-pulse"/>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider opacity-90 mb-1">Llámenos ahora</p>
                  <p className="text-2xl font-bold">300 8565309</p>
                </div>
              </div>

              {/* Description */}
              <div className="flex-1 text-center md:text-left border-t md:border-t-0 md:border-x border-white/20 px-8 py-3 md:py-0">
                <p className="text-base lg:text-lg font-medium">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
              </div>

              {/* Larger CTA Button */}
              <div className="min-w-[180px]">
                <button className="bg-white text-red-600 rounded-lg px-8 py-4 text-base font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl w-full whitespace-nowrap transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center justify-center">
                    Contactar ahora
                    <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Extra space to account for the contact bar that extends beyond the section */}
      <div className="h-24 md:h-20"></div>

      {/* Estilos inline para las animaciones */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-in-out;
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out;
        }
        .animate-slide-in {
          animation: slideIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ServicesTop;