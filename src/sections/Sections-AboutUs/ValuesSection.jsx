import React, { useState, useEffect, useRef } from 'react';
import { Users, Lightbulb, Eye, Briefcase, Shield, Building2 } from 'lucide-react';

const ValuesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    { 
      id: 1, 
      title: "Trabajo en Equipo",
      description: "Colaboramos eficazmente, combinando nuestras fortalezas individuales para lograr objetivos comunes y superar desafíos juntos.",
      icon: Users,
      color: "bg-blue-500",
      textColor: "text-blue-500",
      borderColor: "border-blue-500"
    },
    { 
      id: 2, 
      title: "Innovación", 
      description: "Exploramos nuevas ideas constantemente, buscando soluciones creativas que impulsen el crecimiento y la evolución continua.",
      icon: Lightbulb,
      color: "bg-amber-500",
      textColor: "text-amber-500",
      borderColor: "border-amber-500"
    },
    { 
      id: 3, 
      title: "Transparencia", 
      description: "Cultivamos la confianza a través de la comunicación clara, la honestidad y la accesibilidad en todas nuestras interacciones.",
      icon: Eye,
      color: "bg-teal-500",
      textColor: "text-teal-500",
      borderColor: "border-teal-500"
    },
    { 
      id: 4, 
      title: "Profesionalismo", 
      description: "Mantenemos los más altos estándares en nuestro trabajo, demostrando excelencia, responsabilidad y compromiso constante.",
      icon: Briefcase,
      color: "bg-violet-500",
      textColor: "text-violet-500",
      borderColor: "border-violet-500"
    },
    { 
      id: 5, 
      title: "Lealtad", 
      description: "Construimos relaciones duraderas basadas en el respeto mutuo, la confianza y el compromiso con el bienestar común.",
      icon: Shield,
      color: "bg-rose-500",
      textColor: "text-rose-500",
      borderColor: "border-rose-500"
    }
  ];

  return (
    <div className="py-24 bg-white" ref={sectionRef} id="valores-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section - Con animación */}
        <div 
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <span className="bg-green-100 text-green-600 text-lg font-medium px-4 py-2 rounded-full tracking-wide inline-flex items-center mb-4">
            <Building2 className="mr-2 h-5 w-5" /> Valores
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-azul-primario mb-6">
            Valores Coorporativos
          </h2>
          <p className="max-w-xl mx-auto text-negro-suave">
            Estos principios fundamentales que guían nuestras decisiones y definen nuestra cultura empresarial.
          </p>
        </div>
        
        {/* Tarjetas de valores con animación escalonada */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Primera fila - 3 tarjetas */}
          <div 
            className={`md:col-span-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} 
            style={{ transitionDelay: '200ms' }}
          >
            <ValueCard value={values[0]} />
          </div>
          <div 
            className={`md:col-span-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <ValueCard value={values[1]} />
          </div>
          <div 
            className={`md:col-span-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <ValueCard value={values[2]} />
          </div>
          
          {/* Segunda fila - 2 tarjetas con offset */}
          <div className="md:col-span-2 hidden md:block"></div>
          <div 
            className={`md:col-span-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <ValueCard value={values[3]} />
          </div>
          <div 
            className={`md:col-span-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <ValueCard value={values[4]} />
          </div>
          <div className="md:col-span-2 hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

// Componente de tarjeta mejorado con animaciones al pasar el cursor
const ValueCard = ({ value }) => {
  const Icon = value.icon;
  
  return (
    <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-1 group">
      <div className="p-6 h-full flex flex-col">
        {/* Icono con fondo de color */}
        <div className="mb-6 flex justify-center">
          <div className={`${value.color} p-4 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
          </div>
        </div>
        
        {/* Título con color coincidente */}
        <h3 className={`text-2xl font-bold text-center mb-4 ${value.textColor} transition-transform duration-300 group-hover:scale-105`}>
          {value.title}
        </h3>
        
        {/* Descripción */}
        <p className="text-negro-suave text-sm text-center flex-grow">
          {value.description}
        </p>
        
        {/* Línea decorativa inferior que aparece al pasar el cursor */}
        <div className="mt-4 mx-auto">
          <div className={`h-1 w-0 ${value.color} rounded-full group-hover:w-16 transition-all duration-500`}></div>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;